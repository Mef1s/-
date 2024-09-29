import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <body>
      <nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={menuOpen ? 'show' : ''}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/osrodek">Ośrodek</Link>
            <ul>
              <li><Link to="/placowka">Placówka</Link></li>
              <li><Link to="/placowka#dokumenty">Przyjęcie dziecka do ośrodka</Link></li>
              <li><Link to="/placowka#wwr">Wczesne Wspomaganie Rozwoju</Link></li>
              <li><Link to="/placowka#cele">Cele i metody pracy</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/aktualnosci">Aktualności</Link>
            <ul>
              <li><Link to="/news_2024_2025">Rok Szkolny 2024/2025</Link></li>
              <li><Link to="/news_2023_2024">Rok Szkolny 2023/2024</Link></li>
              <li><Link to="/news_2022_2023">Rok Szkolny 2022/2023</Link></li>
              <li><Link to="/news_2021_2022">Rok Szkolny 2021/2022</Link></li>
              <li><Link to="/news_2020_2021">Rok Szkolny 2020/2021</Link></li>
              <li><Link to="/news_2019_2020">Rok Szkolny 2019/2020</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/kadra">Kadra</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/ochrona-danych">Ochrona Danych Osobowych</Link>
            <ul>
              <li><Link to="/files/polityka-prywatnosci">POLITYKA PRYWATNOŚCI</Link></li>
              <li><Link to="/files/polityka-cookies">POLITYKA COOKIES</Link></li>
              <li><Link to="#">KLAUZULE INFORMACYJNE</Link></li>
              <li><Link to="#">REGULAMIN MONITORINGU</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="banner">
      <div class="banner-container">
    <div class="fade-in-text">Ośrodek Rewalidacyjno - Wychowawczy w Giemlicach</div>
    <div class="fade-in-text2">Żuławski Słonecznik</div>
</div></div> 
    </body>
    
  );
};

export default Header;
