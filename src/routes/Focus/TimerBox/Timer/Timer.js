import './Timer.css';
import React from 'react';
import { useSelector } from 'react-redux';
import PomodoroScale from "./PomodoroScale";

function Timer() {
  let isPlaying = useSelector((state)=> state.timer.isPlaying)
  let currentTime = useSelector((state) => state.timer.time)
  let currentPhaseType = useSelector((state) => state.timer.type)

  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }

  return (
    <div className="timer">
      <div className="timer-inner-box">
        <div className={`timer-textbox ${isPlaying && (currentPhaseType==="phase") ? "": "textbox-break-align"}`}>
          <div className="motivation">
            {isPlaying && (currentPhaseType==="phase") ?
              <h1 id="focus">STAY<br />FOCUS.</h1>:
              <h1 id="break"><span>REST.</span><br />NOT QUIT.</h1>
            }
          </div>
          <hr />
          <h2>00 : {formatTime(Math.floor(currentTime / 60000))} : {formatTime(Math.floor((currentTime % 60000) / 1000))}</h2>
          <PomodoroScale />
        </div>
      </div>
    </div>
  );
}

export default Timer;