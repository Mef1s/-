import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; 


import slide1 from './ped.jpg'; // Zmień ścieżkę
import slide2 from './niep.jpg'; // Zmień ścieżkę

const Home = () => {
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
        <h2>Ośrodek</h2>
        <p>Ośrodek Rewalidacyjno - Wychowawczy w Giemlicach jest publiczną, specjalistyczną placówką oświatową prowadzoną przez Gminę Cedry Wielkie. Ośrodek Rewalidacyjno - Wychowawczy w Giemlicach umożliwia realizację obowiązku szkolnego dzieciom i młodzieży niepełnosprawnej intelektualnie w stopniu umiarkowanym i znacznym ze sprzężeniami oraz w stopniu głębokim a także dzieciom ze zdiagnozowanym autyzmem, w wieku 3 do 25 lat, potrzebujących kompleksowej, wieloprofilowej pomocy.</p>
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
    </div>
  );
};

export default Home;
