import './Focus.css';
import React from 'react';
import Header from '../../components/Header/Header';
import { Music, Play } from 'react-feather';

function Focus() {
  return (
    <div className="App">
      <Header />
      <div className="content-box">
        <main>
          <div className="timer-box">
            <div className="timer-inner-box">
              <div className="timer-textbox">
                <h1>STAY<br />FOCUS.</h1>
                <hr />
                <h2>00 : 00 : 00</h2>
              </div>
            </div>
          </div>
          <div className="controllers">
            <button disabled>STOP</button>
            <button>PAUSE</button>
          </div>
        </main>
        <aside>
          <h1>CONCENTRATION<br />TIMER</h1>
          <div className="technique-box">
            <h2>POMODORO TECHNIQUE</h2>
            <p>A method for staying focused and mentally fresh by eating pomodoros - an interval of work time. Four pomodoros form a set. The technique consists of the following steps:<br /><br />
              Pick a task. {'>'}<br />
              Set a 25-minutes timer. {'>'}<br />
              Work on your task until the time is up. {'>'}<br />
              Take a 5-10 minute break. {'>'}<br />
              Every 4 pomodoros (set) take a longer 15-30 minutes break. {'>'}<br />
              Repeat {'>'}
            </p>
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
                <a href="youtube.com"><Play size={30} strokeWidth="0.5px" /></a>
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