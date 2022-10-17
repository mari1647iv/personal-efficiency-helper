import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './routes/Main/Main';
import PageTwo from './routes/PageTwo/PageTwo';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/page-two" element={<PageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
