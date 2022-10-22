import './Focus.css';
import React, {useEffect} from 'react';
import Header from '../../components/Header/Header';
import { Music, Play } from 'react-feather';
import Timer from '../../components/Timer/Timer';
import { useSelector, useDispatch } from 'react-redux'
import { play, pause, setTime, tick } from '../../store/features/timer/timerSlice'
import { POMODORO_TECHNIQUE } from '../../assets/constants';

function Focus() {
  let isPlaying = useSelector((state) => state.timer.isPlaying)
  let timeLeft = useSelector((state) => state.timer.time)
  const dispatch = useDispatch()
  let timerId

  useEffect(() => {
    if (timeLeft<1000) {
      timerPause()
    }
  }, [timeLeft])

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
    dispatch(setTime(1500000))
  }

  return (
    <div className="App">
      <Header />
      <div className="content-box">
        <main>
          <Timer />
          <div className="controllers">
            <button disabled={isPlaying} onClick={timerReset}>RESET</button>
            <button id="timer-toggle" type="button" onClick={timerToggle} disabled={timeLeft<1000&&!isPlaying}>{isPlaying ? "PAUSE" : "PLAY"}</button>
          </div>
        </main>
        <aside>
          <h1>CONCENTRATION<br />TIMER</h1>
          <div className="technique-box">
            <h2>POMODORO TECHNIQUE</h2>
            {POMODORO_TECHNIQUE}
          </div>
          <div className="playlists-box">
            <h2>PRODUCTIVITY PLAYLISTS</h2>
            <ul className="playlists">
              <li className="playlist">
                <Music size={36} strokeWidth="1px" />
                <div>
                  <h3>Fullmetal Alchemist OST lo-fi music</h3>
                  <div className="playlist-info">
                    <p>40 : 37</p>
                    <p>youtube.com</p>
                  </div>
                </div>
                <a href="https://youtube.com"><Play size={30} strokeWidth="0.5px" /></a>
              </li>
              <li className="playlist">
                <Music size={36} strokeWidth="1px" />
                <div>
                  <h3>Fullmetal Alchemist OST lo-fi music</h3>
                  <div className="playlist-info">
                    <p>40 : 37</p>
                    <p>youtube.com</p>
                  </div>
                </div>
                <a href="https://youtube.com"><Play size={30} strokeWidth="0.5px" /></a>
              </li>
            </ul>
            <div className="show-more">
              <hr />
              <p>+ more</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Focus;