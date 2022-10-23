import './TimerBox.css';
import React, {useEffect} from 'react';
import Timer from './Timer/Timer';
import { useSelector, useDispatch } from 'react-redux'
import { play, pause, setTime, tick, setPhase } from '../../../store/features/timer/timerSlice';
 

function TimerBox() {
  let isPlaying = useSelector((state) => state.timer.isPlaying)
  let timeLeft = useSelector((state) => state.timer.time)
  const dispatch = useDispatch()
  let timerId

  useEffect(() => {
    if (isPlaying) { timerPlay() } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function timerPlay() {
      dispatch(play())
      timerId = setInterval(() => {
        dispatch(tick())
      }, 1000)
  }

  function timerPause() {
      clearInterval(timerId)
      dispatch(pause())
  }

  function timerToggle() {
    if (isPlaying) timerPause()
    else timerPlay()
  }

  function timerReset() {
    dispatch(setPhase(0))
  }

  return (
      <div className="timer-box">
          <Timer />
          <div className="controllers">
            <button onClick={timerReset}>RESET</button>
            <button id={isPlaying?"":"recommended-button"} type="button" onClick={timerToggle} disabled={timeLeft<1000&&!isPlaying}>{isPlaying ? "PAUSE" : "PLAY"}</button>
          </div>
      </div>
  );
}

export default TimerBox;