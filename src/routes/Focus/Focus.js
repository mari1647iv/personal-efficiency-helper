import './Focus.css';
import React from 'react';
import Header from '../../components/Header/Header';
import TimerBox from './TimerBox/TimerBox';
import ProductivityPlaylists from './ProductivityPlaylists/ProductivityPlaylists';
import { POMODORO_TECHNIQUE } from '../../utils/constants';

function Focus() {
  return (
    <div className="App">
      <Header />
      <div className="content-box">
        <main>
          <TimerBox />
        </main>
        <aside>
          <h1>CONCENTRATION<br />TIMER</h1>
          <div className="technique-box">
            <h2>POMODORO TECHNIQUE</h2>
            {POMODORO_TECHNIQUE}
          </div>
          <ProductivityPlaylists />
        </aside>
      </div>
    </div>
  );
}

export default Focus;