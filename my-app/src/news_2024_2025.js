import React, { useState } from 'react';
import './news.css'; 

import chp1 from './img/chp1.jpg';
import chp2 from './img/chp2.jpg';
import chp3 from './img/chp3.jpg';
import mo1 from './img/mo1.jpg';
import mo2 from './img/mo2.jpg';
import mo3 from './img/mo3.jpg';
import mo4 from './img/mo4.jpg';
import mo5 from './img/mo5.jpg';
import zm1 from './img/zm1.jpg';
import zm2 from './img/zm2.jpg';
import zm3 from './img/zm3.jpg';
import zm4 from './img/zm4.jpg';
import zm5 from './img/zm5.jpg';
import zm6 from './img/zm6.jpg';
import zm7 from './img/zm7.jpg';
import zm8 from './img/zm8.jpg';
import zm9 from './img/zm9.jpg';
import zm10 from './img/zm10.jpg';
import rozp1 from './img/rozp1.jpg';
import rozp2 from './img/rozp2.jpg';
import rozp3 from './img/rozp3.jpeg';
import rozp4 from './img/rozp4.jpeg';

const News = () => {
  const posts = [
    {
      title: "Wyjazd nad morze",
      content: "Dnia 6 września w naszym ośrodku odbył się wyjazd nad morze, który okazał się prawdziwą przygodą pełną słońca i radości. Pogoda była wręcz idealna – piękne, słoneczne niebo towarzyszyło nam przez cały dzień, co sprzyjało aktywnemu spędzaniu czasu na plaży. Wychowankowie z entuzjazmem spacerowali wzdłuż brzegu, ciesząc się świeżym, morskim powietrzem. Największą frajdę sprawiało skakanie przez fale, co wywoływało wiele śmiechu i radosnych okrzyków. Cały dzień upłynął w atmosferze beztroski i zabawy. To był cudownie spędzony czas, pełen uśmiechów, radości i niezapomnianych wspomnień, które na długo pozostaną w naszej pamięci.",
      images: [mo1, mo2, mo3, mo4, mo5],
    },
    {
      title: "Biesiada Ziemniaczana",
      content: "Tradycją Ośrodka jest organizowana we wrześniu Biesiada Ziemniaczana. Uroczystość ta stanowi podziękowanie dla wolontariuszy i sponsorów. Tego dnia cały ośrodek wypełniają najpiękniejsze zapachy domowej kuchni, a w menu króluje ziemniak. Wśród wielu atrakcji znalazły się w tym roku zabawy plastyczne, sportowe oraz warsztaty doskonalące nasze umiejętności kulinarne. Istotnym punktem programu było wspólne biesiadowanie, podczas którego delektowaliśmy się przygotowanymi smakołykami. Serdecznie dziękujemy wszystkim gościom, rodzicom, wychowankom oraz pracownikom za wspólnie spędzoną sobotę. Już teraz zapraszamy na kolejną edycję za rok!",
      images: [zm1, zm2, zm3, zm4, zm5, zm6, zm7, zm8, zm9,zm10],
    },
    {
      title: "Dzień Chłopaka",
      content: "30 września w naszym ośrodku odbyły się niezapomniane obchody Dnia Chłopaka! Przygotowano wiele atrakcji, aby ten wyjątkowy dzień stał się jeszcze bardziej radosny. Goście mieli okazję skosztować pysznego popcornu oraz słodkiej waty cukrowej, które cieszyły się ogromną popularnością. Oprócz smakołyków przygotowano także specjalne miejsce do robienia zdjęć. Każdy mógł pozować w oryginalnych kapeluszach, kolorowych okularach oraz z zabawnymi plakietkami, tworząc niezapomniane pamiątki. Był to dzień pełen śmiechu, dobrej zabawy i pozytywnych emocji. Dziękujemy wszystkim za wspólne świętowanie i zapraszamy na kolejne wydarzenia w naszym ośrodku!",
      images: [chp1, chp2, chp3],
    },
    {
        title: "Rozpoczęcie roku szkolnego 2024/2025",
        content: "2 września 2024 roku w naszym Ośrodku Rewalidacyjno-Wychowawczym „Żuławski Słonecznik” odbyła się uroczysta inauguracja nowego roku szkolnego 2024/2025. Był to dzień pełen emocji, podczas którego wychowankowie pożegnali wakacyjny czas i z entuzjazmem wkroczyli w nowy etap nauki. Uroczystość rozpoczęła się przemówieniem Pani Dyrektor Janiny Gruchockiej, która z radością powitała wszystkich obecnych – szczególnie tych, którzy po raz pierwszy przekroczyli progi naszej placówki. Po zakończeniu oficjalnej części, uczniowie udali się na pierwsze spotkania z wychowawcami, pełni energii i gotowi na nowe wyzwania. Życzymy wszystkim wychowankom, nauczycielom oraz rodzicom wielu sukcesów i radości w nadchodzącym roku szkolnym.",
        images: [rozp1, rozp2, rozp3, rozp4],
      },
  ];

  return (
    <div className="news-container">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <NewsSlider images={post.images} />
        </div>
      ))}
    </div>
  );
};

const NewsSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="news-slider">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slider-image"
          />
        ))}
      </div>
      <button className="slider-arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default News;
