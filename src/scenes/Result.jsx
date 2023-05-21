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
      
      {/* <video className={styles.video2} autoPlay loop muted>
        <source src="/image/back.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay2}> */}


       <video className={styles.video} autoPlay loop muted>
        <source src="/image/mori_y.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}>
      
        <div className="popper">
        
          
        </div>
        <div>
          <h3 className={`${styles.image_flex} ${styles.fadeUp}`}>スコア</h3>
          <h2 className={`${styles.image_flex} ${styles.fadeUp}`}>SCORE</h2>
          <h1 className={`${styles.image_flex} ${styles.fadeUp} ${styles.delay2}`}>300</h1>
    
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
        </div>
       
      
      


    

  );
};
