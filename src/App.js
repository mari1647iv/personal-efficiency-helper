import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import Focus from './routes/Focus/Focus';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/focus" element={<Focus />} />
      </Routes>
    </Router>
  );
}

export default App;
