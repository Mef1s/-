import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header.js'; 
import Home from './Home.js'; 
import News2425 from './news_2024_2025.js'; 
import Osrodek from './Osrodek.js'; 
import Aktualnosci from './aktualnosci.js'; 
import './App.css'; 


const App = () => {
  return (
    <Router>
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news_2024_2025" element={<News2425 />} /> 
          <Route path="/Osrodek" element={<Osrodek />} />
          <Route path="/aktualnosci" element={<Aktualnosci />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
