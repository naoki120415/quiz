import React from 'react';
import styles from './mode_select.module.css'


export function Mode_select ({ onClickStart }) {
  return (
    <>
    <h1>モード選択</h1>
      
      <button className="intro__button" onClick={onClickStart}>
        ランダム
      </button>

      
    </>
  );
};


