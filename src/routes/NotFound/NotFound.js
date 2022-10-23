import React from 'react';
import Header from '../../components/Header/Header';
import { ReactComponent as Problem } from "../../assets/img/404-color.svg"

function NotFound() {
  return (
    <div className="App">
      <Header />
      <div className="content-box">
        <main>
          <h1 style={{"font-weight":"300"}}>404<br />Page Not Found</h1>
          <Problem />
        </main>
      </div>
    </div>
  );
}

export default NotFound;