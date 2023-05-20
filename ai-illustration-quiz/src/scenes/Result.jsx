import React,{ FC, useEffect, useRef } from 'react';
import styles from './Result.module.css'
// import particlesJS from './Result_animation'
import { useReward } from "react-rewards";

const useInterval = (callback) => {
  const callbackRef = useRef(() => {});

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const timerId = setInterval(() => callbackRef.current(), 1000);
    return () => clearInterval(timerId);
  }, []);
};


  



  export function Result  (props) {
    const { reward: rewardLeft, isAnimating: isAnimatingLeft } = useReward(
      "rewardLeft",
      "confetti",
      {
        angle: 120,
        position: "absolute",
      }
    );
    const { reward: rewardRight, isAnimating: isAnimatingRight } = useReward(
      "rewardRight",
      "confetti",
      {
        angle: 790,
        position: "absolute",
      }
    );
  
    useInterval(() => {
      if (!isAnimatingRight || !isAnimatingLeft) {
        rewardLeft();
        rewardRight();
      }
    });
  
  return (
    <div className={styles.container}  >
      
      
        <div className="popper">
        
          
        </div>
        <div>
          <h3>スコア</h3>
          <h2>SCORE</h2>
          <h1>{props.score}</h1>
    
          <button className={styles.button} onClick={props.onClickStart} >
            タイトルにもどる
          <span id="rewardId" />
            
          </button>
          </div>
        <div className="popper">
        <p><span id="rewardRight" /></p>
        <p><span id="rewardLeft" /></p>
        
        </div>
    
    
      
      

       
      
      
    </div>

    

  );
};
