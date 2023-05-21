
import { Mode_select } from 'src/scenes/mode_select';
import styles from './Scene.module.css'
import { useState } from 'react';
import { Result } from 'src/scenes/Result';
import { Title } from 'src/scenes/title';
import { SP_main } from 'src/scenes/singleplay_main';
import { SP_correct } from 'src/scenes/correct';

export function Scene() {
    
    //const currentScene = props.currentScene; // 仮の現在のシーン
    //console.log(currentScene);
    const [scene, setScene] = useState('title');
    const [answer, setAnswer] = useState("");

    const handleGameOvered = (answer) => {
      console.log("answer A : " + answer)
      setAnswer(answer)
      setScene('correct')
    }


    return(
    <div className={styles.container}>
      <div className="container" style={{ width: 900, height: 600 }}>
        <div className="box">
            <div id="scene" className="scene" >
                {scene === 'title' && <Title onClickStart1={() => setScene('mode_select')} onClickStart2={() => setScene('result')}/>}
                {scene === 'mode_select' && <Mode_select onClickStart={() => setScene('singleplay_main')}/>} 
                {scene === 'singleplay_main' && <SP_main onGameOvered={handleGameOvered}/>} 
                {scene === 'correct' && <SP_correct answer={answer} onClickStart={() => setScene('singleplay_main')}/>} 
                {scene === 'result' && <Result answer={answer} onClickStart={() => setScene('title')}/>}
                
            </div>
        </div>
      </div>
      
    </div>
    )
    
}
