import React from 'react';
import styles from './singleplay_main.module.css'
import { useState, useEffect } from 'react';
import Image from "next/image"
import pass from "../pass.json"
import db from "../firebase/firebase";
//import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const red = '#f54e4e';
const green = '#4aec8c';

//console.log(pass.image_data)
const image_data = [];
for (let i = 0; i < pass.image_data.length; i++) {
  image_data[i] = pass.image_data[i];
}
//console.log(image_data[5].ans)


export function SP_main(props) {
  const [time, setTime] = useState(10); // タイマーの初期値（秒）
  const [gameOvered, setGameOvered] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    if (time === 0) {
      props.onGameOvered2(score)
    }

    return () => clearInterval(timer);
  }, [time]);

  // 分と秒の計算
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // パーセント完了率の計算
  const progress = (time / 60) * 100;



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

      <video className={styles.video} autoPlay loop muted>
        <source src="/image/mori.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}>

      {users.map((user) => (
        <div key={users}><font size="30" weight="bold" color="white">第{(user.quiznum > 0) ? user.quiznum : user.quiznum + 1}問</font></div>
      ))}
      <div className={styles.flex_test_box}>
        <span className={styles.picture}>
          {users.map((user) => (
            <div key={users} className={styles.image_flex}>
              <Image src={image_data[(user.quiznum > 0) ? user.quiznum - 1 : user.quiznum].pass} alt="Vercel Logo" width={230} height={230} />
            </div>
          ))}
        </span>
        <span className={styles.circul}>
          <CircularProgressbar
            value={progress}
            strokeWidth={10}


            styles={buildStyles({
              textColor: '#000',
              pathColor: red,


            })} />
          <h1>{minutes + ':' + seconds}</h1>
        </span>


      </div>
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
    </div >


  );
};
