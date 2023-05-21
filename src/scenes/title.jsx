import React from 'react';
import styles from './title.module.css'
import Image from "next/image"
import db from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

const washingtonRef = doc(db, "users", "b4wmwNJAheHYZziMRc8p");
// Set the "capital" field of the city 'DC'
updateDoc(washingtonRef, {
  quiznum: 0,
  score: 0
});


export function Title(props) {
  return (
    <div className={styles.container}>

      <video className={styles.video} autoPlay loop muted>
        <source src="/image/ha.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}>

        <div className={styles.image_flex}>
          <Image src="/image/title.png" alt="title logo" width={250} height={250} />

        </div>


        <div className={styles.flex_test_box}>
          <button className={styles.button} onClick={props.onClickStart1}>はじめる</button>
          <button className={styles.button} onClick={props.onClickStart2}>あそびかた</button>
        </div>
      </div>
    </div>


  );
};


