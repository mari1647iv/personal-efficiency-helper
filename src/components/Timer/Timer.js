import './Timer.css';
import React from 'react';
import { useSelector } from 'react-redux';

function Timer() {
  let currentTime = useSelector((state) => state.timer.time)

  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }

  return (
    <div className="timer-box">
      <div className="timer-inner-box">
        <div className="timer-textbox">
          <h1>STAY<br />FOCUS.</h1>
          <hr />
          <h2>00 : {formatTime(Math.floor(currentTime / 60000))} : {formatTime(Math.floor((currentTime % 60000) / 1000))}</h2>
        </div>
      </div>
    </div>
  );
}

export default Timer;