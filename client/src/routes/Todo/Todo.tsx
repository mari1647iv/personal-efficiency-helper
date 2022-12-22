import './Todo.css';
import React from 'react';
import Header from '../../components/Header/Header';

function Todo() {
  return (
    <div className="App">
      <Header />
      <div className="content-box">
        <aside>
          <h1 className="todo-title">JUST DO IT.</h1>
          <a
            className="repo-link"
            href="https://github.com/mari1647iv/personal-efficiency-helper"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </aside>
      </div>
    </div>
  );
}

export default Todo;