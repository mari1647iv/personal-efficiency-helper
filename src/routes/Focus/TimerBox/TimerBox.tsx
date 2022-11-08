import './TimerBox.css';
import React, { useEffect } from 'react';
import Timer from './Timer/Timer';
import { play, pause, tick, setPhase } from '../../../store/features/timer/timerSlice';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';


function TimerBox() {
  let isPlaying = useAppSelector((state) => state.timer.isPlaying)
  let timeLeft = useAppSelector((state) => state.timer.time)
  const dispatch = useAppDispatch()
  let timerId: NodeJS.Timer | undefined

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
        <button id={isPlaying ? "" : "recommended-button"} type="button" onClick={timerToggle} disabled={timeLeft < 1000 && !isPlaying}>{isPlaying ? "PAUSE" : "PLAY"}</button>
      </div>
    </div>
  );
}

export default TimerBox;