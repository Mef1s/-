import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header.js'; 
import Home from './Home.js'; 
import News2425 from './news_2024_2025.js'; 
import Ośrodek from './Osrodek.js'; 
import Aktualności from './aktualnosci.js'; 
import './App.css'; 


const App = () => {
  return (
    <Router>
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news_2024_2025" element={<News2425 />} /> 
          <Route path="/Ośrodek" element={<Ośrodek />} />
          <Route path="/Aktualności" element={<Aktualności />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
