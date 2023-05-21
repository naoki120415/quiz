import styles from './count_down.module.css'
import React, { useEffect, useState } from 'react'


export function CountDown ({ onCountOvered }){
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count === 0) {
      onCountOvered()
    }
  }, [count, onCountOvered])

  useEffect(() => {
    let timerID

    function step() {
      setCount((current) => current - 1)
      timerID = window.setTimeout(step, 1000)
    }

    timerID = window.setTimeout(step, 1000)

    return () => {
      clearTimeout(timerID)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onCountOvered])

  if (count === 0) {
    return null
  }

  return (


    <div className={styles.container} >

    {/* <video className={styles.video2} autoPlay loop muted>
      <source src="/image/back.mp4" type="video/mp4" />
    </video>
    <div className={styles.overlay2}> */}

      <video className={styles.video} autoPlay loop muted>
        <source src="/image/mori_q.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}>

      <h1 className={styles.count} >
        {count}
      </h1>
      </div>
    </div>

  );
};




