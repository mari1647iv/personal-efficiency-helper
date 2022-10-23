import './Todo.css';
import React from 'react';
import Header from '../../components/Header/Header';

function Todo() {
  return (
    <div className="App">
      <Header />
      <main>
        <a
          className="repo-link"
          href="https://github.com/mari1647iv/personal-efficiency-helper"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </main>
    </div>
  );
}

export default Todo;