import './Hacks.css';
import React from 'react';
import Header from '../../components/Header/Header';
import { POMODORO_TECHNIQUE } from '../../utils/constants';

function Hacks() {
  return (
    <div className="App">
      <Header />
      <div className="content-box">
        <aside>
          <h1 className="hacks-title">PERSONAL EFFICIENCY TIPS</h1>
          <div className="tip-box">
            <h2>POMODORO TECHNIQUE</h2>
            {POMODORO_TECHNIQUE}
          </div>
          <div className="tip-box">
            <h2>EAT THE FROG</h2>
            <p>The eat the frog strategy is a prioritization and productivity method used to help people identify difficult tasks. <br />The idea is that you identify one challenging task (<i>the frog</i>) and complete the task first thing first in the morning (<i>eat it</i>).</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Hacks;