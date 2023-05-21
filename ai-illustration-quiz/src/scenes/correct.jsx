import React from 'react';
import styles from './correct.module.css'
import { useState, useEffect } from 'react';
import Image from "next/image"
import pass from "../pass.json"
import db from "../firebase/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDocs, onSnapshot} from "firebase/firestore"
import { doc, updateDoc } from "firebase/firestore";

//console.log(pass.image_data)
function judge() {

}
const image_data = [];
for (let i = 0; i < pass.image_data.length; i++) {
    image_data[i] = pass.image_data[i];
}
console.log(image_data)

let x = 0;
let quiz_num = 0;

export function SP_correct(props) {
    console.log("props  " + props.answer)

    const [users, setUsers] = useState([]);
    useEffect(() => {
        //データベースからデータ取得
        const userData = collection(db, 'users');
        //console.log(userData);

        getDocs(userData).then((snapShot) => {
            console.log(snapShot.docs.map(doc => ({ ...doc.data() })));
            x = snapShot.docs.map(doc => ({ ...doc.data() }));
            console.log(x[0].quiznum);
            quiz_num = x[0].quiznum;
            setUsers(snapShot.docs.map(doc => ({ ...doc.data() })))
        });
        //リアルタイムで取得
        onSnapshot(userData, (user) => {
            setUsers(user.docs.map((doc) => ({ ...doc.data() })))

        })
    }, []);

    const washingtonRef = doc(db, "users","b4wmwNJAheHYZziMRc8p");
    // Set the "capital" field of the city 'DC'
     updateDoc(washingtonRef, {
        quiznum: quiz_num + 1
    });


    return (

        <div className={styles.container}>
            {users.map((user) => (
                <div key={users}><font size="30">第{user.quiznum}問</font></div>
            ))}
            {users.map((user) => (
                <div key={users} className={styles.image_flex}>
                    <Image src={image_data[(user.quiznum > 0) ? user.quiznum - 1 : user.quiznum].pass} alt="Vercel Logo" width={400} height={400} />
                </div>
            ))}
            <div className={styles.chatInputButton}>
                <p>
                    あなたのスコアは{}
                </p>
                <button className="intro__button" onClick={props.onClickStart}>
                    次の問題
                </button>

            </div>

        </div>


    );
};
