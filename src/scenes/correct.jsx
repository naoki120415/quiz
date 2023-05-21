import React from 'react';
import styles from './correct.module.css'
import { useState, useEffect } from 'react';
import Image from "next/image"
import pass from "../pass.json"
import db from "../firebase/firebase";
//import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { doc, updateDoc } from "firebase/firestore";

//console.log(pass.image_data)

const image_data = [];
for (let i = 0; i < pass.image_data.length; i++) {
    image_data[i] = pass.image_data[i];
}
console.log(image_data)

let x = 0;
let quiz_num = 0;
let ans = "";
let score = 0;
let pop;

// function judge(ans) {
//     console.log("?????????????????????")
//     console.log("ans" + ans + "image_data[quiz_num].ans" + image_data[quiz_num].ans)
//     if (ans == image_data[quiz_num].ans) {
//         console.log("OK!!!!!!")
//         score += 100;
//     }
//     return 
// }


export function SP_correct(props) {
    ans = props.answer
    console.log("props  " + props.answer)

    const [users, setUsers] = useState([]);
    useEffect(() => {
        //データベースからデータ取得
        const userData = collection(db, 'users');
        console.log(userData);

        getDocs(userData).then((snapShot) => {
            console.log(snapShot.docs.map(doc => ({ ...doc.data() })));
            x = snapShot.docs.map(doc => ({ ...doc.data() }));
            console.log(x[0].quiznum);
            score = x[0].score
            quiz_num = x[0].quiznum;
            setUsers(snapShot.docs.map(doc => ({ ...doc.data() })))
        });

        //リアルタイムで取得
        onSnapshot(userData, (user) => {
            setUsers(user.docs.map((doc) => ({ ...doc.data() })))
        })
    }, []);

    const washingtonRef = doc(db, "users", "b4wmwNJAheHYZziMRc8p");
    // Set the "capital" field of the city 'DC'
    updateDoc(washingtonRef, {
        quiznum: quiz_num + 1,
        score: score
    });

    return (

        <div className={styles.container}>
            {users.map((user) => (
                <div key={users}><font size="30">第{quiz_num}問</font></div>
            ))}

            <div key={users} className={styles.image_flex}>
                <Image src={image_data[(quiz_num > 0) ? quiz_num - 1 : quiz_num].pass} alt="Vercel Logo" width={230} height={230} />
            </div>

            <div className={styles.chatInputButton}>

                <p >
                    あなたのスコアは{/*score*/100*quiz_num}
                </p>

                <button className="intro__button" onClick={/*judge(ans) */props.onClickStart}>
                    次の問題
                </button>

            </div>

        </div>


    );
};
