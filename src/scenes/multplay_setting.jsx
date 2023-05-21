import React from 'react';
import styles from './multplay_setting.module.css'

export function MP_setting  (props) {
  return (
    <div className={styles.container}>
    <h1>リザルト</h1>
      <p>
        あなたのスコアは{props.score}
      </p>

      <button className="intro__button" onClick={props.onClickStart}>
        ルームを作る
      </button>

      <button className="intro__button" onClick={props.onClickStart}>
        ルームに入る
      </button>

      
    </div>
  );
};