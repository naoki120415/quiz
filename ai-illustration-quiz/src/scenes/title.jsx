import React from 'react';
import styles from './title.module.css'
import Image from "next/image"



export function Title (props) {
  return (
    <div className={styles.container}>
        <div className={styles.image_flex}>
        <Image src="/image/title_image.png" alt="Vercel Logo" width={400} height={400} />
        </div>
        
        <div className={styles.flex_test_box}>
          <button className={styles.button} onClick={props.onClickStart1}>aaaぶ</button>
          <button className={styles.button} onClick={props.onClickStart2}>二人で遊ぶ</button>
        </div>
    </div> 
    
  );
};


