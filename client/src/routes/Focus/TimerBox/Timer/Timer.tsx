import './Timer.css';
import React from 'react';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import PomodoroScale from "./PomodoroScale";

function Timer() {
  let isPlaying = useAppSelector((state) => state.timer.isPlaying)
  let currentTime = useAppSelector((state) => state.timer.time)
  let currentPhaseType = useAppSelector((state) => state.timer.type)

  function formatTime(time: number) {
    return time < 10 ? '0' + time : time;
  }

  return (
    <div className="timer">
      <div className="timer-inner-box">
        <div className={`timer-textbox ${isPlaying && (currentPhaseType === "focus") ? "" : "textbox-break-align"}`}>
          <div className="motivation">
            {isPlaying && (currentPhaseType === "focus") ?
              <h1 id="focus">STAY<br />FOCUS.</h1> :
              <h1 id="break"><span>REST.</span><br />NOT QUIT.</h1>
            }
          </div>
          <hr />
          <h2>00 : {formatTime(Math.floor(currentTime / 60000))} : {formatTime(Math.floor((currentTime % 60000) / 1000))}</h2>
          <PomodoroScale />
          <p className="instruction">click to switch the phase</p>
        </div>
      </div>
    </div>
  );
}

export default Timer;