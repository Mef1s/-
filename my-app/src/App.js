import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.js'; // Upewnij się, że ścieżka do Header.js jest poprawna

const App = () => {
  return (
    <Router>
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<div>Strona główna</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
