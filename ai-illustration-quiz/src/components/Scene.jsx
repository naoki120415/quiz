
import { Mode_select } from 'src/scenes/mode_select';
import styles from './Scene.module.css'
import { useState } from 'react';
import { Result } from 'src/scenes/Result';
import { Title } from 'src/scenes/title';
import { SP_main } from 'src/scenes/singleplay_main';

export function Scene() {
    
    //const currentScene = props.currentScene; // 仮の現在のシーン
    //console.log(currentScene);
    const [scene, setScene] = useState('title');
    const [score, setScore] = useState(0);
    const handleGameOvered = (finalScore) => {
      
      setScore(finalScore)
      setScene('result')
    }
    return(
    <div className={styles.container}>
      <div className="container">
        <div className="box">
            <div id="scene" className="scene" style={{ width: 900, height: 600 }}>
                {scene === 'title' && <Title onClickStart1={() => setScene('mode_select')} onClickStart2={() => setScene('result')}/>}
                {scene === 'mode_select' && <Mode_select onClickStart={() => setScene('singleplay_main')}/>} 
                {scene === 'singleplay_main' && <SP_main onGameOvered={handleGameOvered}/>} 
                {scene === 'result' && <Result score={score} onClickStart={() => setScene('title')}/>}
                
            </div>
        </div>
      </div>
      
    </div>
    )
    
}
