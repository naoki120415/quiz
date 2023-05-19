import React from 'react';
import styles from './singleplay_main.module.css'
import { useState,useEffect } from 'react';
import Image from "next/image"


export function SP_main  (props) {
  
  const [gameOvered, setGameOvered] = useState(false)
  const [score, setScore] = useState(100)

  const handleon_GameOvered = (score) => {
    {props.onGameOvered(score)}
  };

  const handleKeyDown = (e)=> {
    if (e.nativeEvent.isComposing || e.key !== 'Enter')return
      handleon_GameOvered(score);
    
  }

  
  return (
    
    <div className={styles.container}>
        <div className={styles.image_flex}>
        <Image src="/image/dog.png" alt="Vercel Logo" width={400} height={400} />
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

        <button onClick={() => {
              handleon_GameOvered(score);
              
            }}>
          回答
        </button>
        
      </div>
      
    </div>
    

  );
};
