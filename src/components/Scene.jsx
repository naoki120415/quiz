
import { Mode_select } from 'src/scenes/mode_select';
import styles from './Scene.module.css'
import { useState } from 'react';
import { Result } from 'src/scenes/Result';
import { Title } from 'src/scenes/title';
import { SP_main } from 'src/scenes/singleplay_main';
import { SP_correct } from 'src/scenes/correct';
import { CountDown } from 'src/scenes/count_down';

export function Scene() {
    
    //const currentScene = props.currentScene; // 仮の現在のシーン
    //console.log(currentScene);
    const [scene, setScene] = useState('title');
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);

    const handleGameOvered = (answer) => {
      console.log("answer A : " + answer)
      setAnswer(answer)
      setScene('correct')
    }

    const handleGoResult = (finalScore) => {
      
      setScore(finalScore)
      setScene('result')
    }


    return(
    <div className={styles.container}>
      <div className="container" style={{ width: 750, height: 400 }}>
        <div className="box">
            <div id="scene" className="scene" >
                {scene === 'title' && <Title onClickStart1={() => setScene('count_down')} onClickStart2={() => setScene('result')}/>}
                {scene === 'count_down' && <CountDown onCountOvered ={() => setScene('singleplay_main')}/>} 
                {scene === 'singleplay_main' && <SP_main onGameOvered={handleGameOvered} onGameOvered2={handleGoResult}/>} 
                {scene === 'correct' && <SP_correct answer={answer} onClickStart={() => setScene('singleplay_main')}/>} 
                {scene === 'result' && <Result score={score} onClickStart={() => setScene('title')}/>}
                
            </div>
        </div>
      </div>
      
    </div>
    )
    
}
