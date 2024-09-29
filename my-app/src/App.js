import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.js'; 
import Home from './Home.js'; 
import './App.css'; // Importuj styl CSS

const App = () => {
  return (
    <Router>
      <div id="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
