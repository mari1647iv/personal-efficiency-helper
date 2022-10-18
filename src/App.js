import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import PageTwo from './routes/PageTwo/PageTwo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/focus" element={<PageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
