import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CSS/Home.css'; 


import slide1 from './img/ped.jpg'; 
import slide2 from './img/niep.jpg'; 

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
  
    const toggleMenu = () => setMenuOpen(!menuOpen);
  
    const handleScrollLinkClick = (to) => {
  
      navigate('/Ośrodek');
  
    
      setTimeout(() => {
        if (document.getElementById(to)) {
          document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="Home">
            <div className="info-text">
        <h1>Ośrodek</h1>
        <p>Ośrodek Rewalidacyjno - Wychowawczy w Giemlicach jest publiczną, specjalistyczną placówką oświatową prowadzoną przez Gminę Cedry Wielkie. Ośrodek Rewalidacyjno - Wychowawczy w Giemlicach umożliwia realizację obowiązku szkolnego dzieciom i młodzieży niepełnosprawnej intelektualnie w stopniu umiarkowanym i znacznym ze sprzężeniami oraz w stopniu głębokim a także dzieciom ze zdiagnozowanym autyzmem, w wieku 3 do 25 lat, potrzebujących kompleksowej, wieloprofilowej pomocy.</p>
      </div>
      <div class="button-row">
    <div class="ico-box bg-gray-light">
        <div class="icon">
            <span class="icon-document"><span class="sr-only">&amp;</span></span>
        </div>
        <h2 class="info-text">Placówka</h2>
        <div class="des">
            <p>o nas</p>
        </div>
        <div class="link-holder">
        <Link to="/Ośrodek" onClick={() => handleScrollLinkClick('placowka')}className="link-more">
                  DOWIEDZ SIĘ WIĘCEJ
                </Link>
        </div>
    </div>


    <div class="ico-box bg-gray-light">
        <div class="icon">
            <span class="icon-document"><span class="sr-only">&amp;</span></span>
        </div>
        <h2 class="info-text">Dokumenty</h2>
        <div class="des">
            <p>Dokumenty konieczne do przyjęcia dziecka</p>
        </div>
        <div class="link-holder">
        <Link to="/Ośrodek" onClick={() => handleScrollLinkClick('dokumenty')}className="link-more">
        DOWIEDZ SIĘ WIĘCEJ
        </Link>
        </div>
    </div>

    <div class="ico-box bg-gray-light">
        <div class="icon">
            <span class="icon-document"><span class="sr-only">&amp;</span></span>
        </div>
        <h2 class="info-text">WWR</h2>
        <div class="des">
            <p>Wczesne wspomaganie rozwoju</p>
        </div>
        <div class="link-holder">
        <Link to="/Ośrodek" onClick={() => handleScrollLinkClick('wwr')} className="link-more">
        DOWIEDZ SIĘ WIĘCEJ
        </Link>
        </div>
    </div>

    <div class="ico-box bg-gray-light">
        <div class="icon">
            <span class="icon-document"><span class="sr-only">&amp;</span></span>
        </div>
        <h2 class="info-text">Praca</h2>
        <div class="des">
            <p>Cele i metody pracy</p>
        </div>
        <div class="link-holder">
        <Link to="/Ośrodek" onClick={() => handleScrollLinkClick('cele')}className="link-more">
        DOWIEDZ SIĘ WIĘCEJ
        </Link>
        </div>
    </div>
</div>

<div id="container">
      <Slider {...settings}>
        <div>
          <img src={slide1} id="SImage"/>
          <h2 className="info-text" style={{ textAlign: 'center' }}>Kadra Pedagogiczna</h2>
        </div>
        <div>
          <img src={slide2} id="SImage"/>
          <h2 className="info-text" style={{ textAlign: 'center' }}>Kadra Niepedagogiczna</h2>
        </div>
      </Slider>
      </div>

      <div class="contact-row">
    <div class="contact-box">
       <h4 class='info-text'>Giemlice 1<br></br>83-022 Suchy Dąb</h4>
    </div>
    <div class="contact-box">
        <h4 class='info-text'>Placówka: +48 58 305-43-27<br></br>Dyrektor: +48 501-125-190</h4>
    </div>
    <div class="contact-box">
      <h4 class='info-text'><a href="mailto:orw.giemlice@wp.pl">orw.giemlice@wp.pl</a></h4>
    </div>
</div>

    </div>
  );
};

export default Home;
