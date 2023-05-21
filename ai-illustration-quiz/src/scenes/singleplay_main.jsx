import React from 'react';
import styles from './singleplay_main.module.css'
import { useState, useEffect } from 'react';
import Image from "next/image"
import pass from "../pass.json"
import db from "../firebase/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDocs, onSnapshot } from "firebase/firestore"


//console.log(pass.image_data)
const image_data = [];
for (let i = 0; i < pass.image_data.length; i++) {
  image_data[i] = pass.image_data[i];
}
//console.log(image_data[5].ans)


export function SP_main(props) {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    //データベースからデータ取得
    const userData = collection(db, 'users');
    //console.log(userData);

    getDocs(userData).then((snapShot) => {
      //console.log(snapShot.docs.map(doc => ({...doc.data() })));
      setUsers(snapShot.docs.map(doc => ({ ...doc.data() })))
    });

    //リアルタイムで取得
    onSnapshot(userData, (user) => {
      setUsers(user.docs.map((doc) => ({ ...doc.data() })))
    })
  }, []);

  const [answer, setAnswer] = useState("");

  const handleon_GameOvered = (answer) => {
    console.log("answer :" + answer)
    { props.onGameOvered(answer) }
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return
    handleon_GameOvered(answer);
  }
  return (

    <div className={styles.container}>
      {users.map((user) => (
        <div key={users}><font size="30">第{user.quiznum + 1}問</font></div>
      ))}
      {users.map((user) => (
        <div key={users} className={styles.image_flex}>
          <Image src={image_data[user.quiznum].pass} alt="Vercel Logo" width={400} height={400} />
        </div>
      ))}
      <div className={styles.chatInputButton}>

        <input
          type="text"
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          value={answer}
          onKeyDown={handleKeyDown}
        />

      </div>

    </div>


  );
};
