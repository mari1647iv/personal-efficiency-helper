import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import Focus from './routes/Focus/Focus';
import { store } from './store/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/focus" element={<Focus />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
