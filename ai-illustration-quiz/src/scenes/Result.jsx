import React from 'react';
import styles from './Result.module.css'

export function Result  (props) {
  return (
    <div className={styles.container}>
    <h1>リザルト</h1>
      <p>
        あなたのスコアは{props.score}
      </p>

      <button className="intro__button" onClick={props.onClickStart}>
        タイトルに戻る
      </button>

      
    </div>
  );
};
