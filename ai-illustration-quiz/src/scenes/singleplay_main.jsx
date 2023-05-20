import React from 'react';
import styles from './singleplay_main.module.css'
import { useState,useEffect } from 'react';
import Image from "next/image"
import pass from "../pass.json"
import db from "../firebase/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

//console.log(pass.image_data)
let quizcount = 0;
const image_data = [];
for (let i = 0; i < pass.image_data.length; i++) {
  image_data[i] = pass.image_data[i];
}
console.log(image_data[5].ans)

export function SP_main  (props) {
  
  const [gameOvered, setGameOvered] = useState(false)
  const [score, setScore] = useState(100)

  const handleon_GameOvered = (score) => {
    {props.onGameOvered(score)}
  };
  console.log(score)

  const handleKeyDown = (e)=> {
    if (e.nativeEvent.isComposing || e.key !== 'Enter')return
      quizcount++;
      handleon_GameOvered(score);
    
  }
console.log(quizcount)
  
  return (
    
    <div className={styles.container}>
      <div ><font size = "30">第３問</font></div>
        <div className={styles.image_flex}>
        <Image src={image_data[0].pass} alt="Vercel Logo" width={400} height={400} />
        </div>
      <div className={styles.chatInputButton}>

        <input
          type="text"
          onChange={(e) => {
            setScore(e.target.value);
          }}
          value={score}
          onKeyDown={handleKeyDown}
        />
        
      </div>
      
    </div>
    

  );
};
