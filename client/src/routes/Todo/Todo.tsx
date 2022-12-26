import './Todo.css';
import React from 'react';
import Header from '../../components/Header/Header';

function Todo() {
  return (
    <div className="App">
      <Header />
      <div className="content-box">
        <div className="heading-box">
          <div className="heading-content">
            <h1 className="todo-title">MY DAY</h1>
          </div>
          <h1 className="motivation">
            GET<br /><span> THE<br />SH</span>IT<br />DONE.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Todo;