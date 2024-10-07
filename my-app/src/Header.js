import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScrollLinkClick = (to) => {
    // Zmiana adresu URL do Ośrodek
    navigate('/Osrodek');

    // Przewijanie do sekcji po krótkim opóźnieniu
    setTimeout(() => {
      if (document.getElementById(to)) {
        document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Dostosuj czas, jeśli potrzebne
  };

  return (
    <header>
      <nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={menuOpen ? 'show' : ''}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Osrodek">Ośrodek</Link>
            <ul>
              <li>
                <Link to="/Osrodek" onClick={() => handleScrollLinkClick('placowka')}>
                  Placówka
                </Link>
              </li>
              <li>
                <Link to="/Osrodek" onClick={() => handleScrollLinkClick('dokumenty')}>
                  Przyjęcie dziecka do ośrodka
                </Link>
              </li>
              <li>
                <Link to="/Osrodek" onClick={() => handleScrollLinkClick('wwr')}>
                  Wczesne Wspomaganie Rozwoju
                </Link>
              </li>
              <li>
                <Link to="/Osrodek" onClick={() => handleScrollLinkClick('cele')}>
                  Cele i metody pracy
                </Link>
              </li>
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
        <div className="banner-container">
          <div className="fade-in-text">Ośrodek Rewalidacyjno - Wychowawczy w Giemlicach</div>
          <div className="fade-in-text2">Żuławski Słonecznik</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
