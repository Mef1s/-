import React, { useState } from 'react';
import './CSS/news.css'; 

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


const News = () => {
  const posts = [
    {
      title: "Spotkanie wigilijne",
      content: "Okres Świąt Bożego Narodzenia to magiczny czas, wypełniony radością i miłością do bliźnich. W związku z tym 19 grudnia 2023 r. po raz dwunasty w Ośrodku Rewalidacyjno- Wychowawczym „Żuławski Słonecznik” w Giemlicach odbyło się uroczyste spotkanie wigilijne. W wydarzeniu wzięli udział zaproszeni goście: Wójt Gminy Cedry Wielkie Pan Janusz Goliński, Sołtys wsi Giemlice Anita Walenczykowska, a także przyjaciele placówki – przedstawiciel Stowarzyszenia Motocyklowego LOTOR NORTH - pan Robert Rachoń, Fundacji Vivadental - pan Jarosław Szycik, ZTM Gdańsk - pani Elżbieta Oleksiuk z przedstawicielami, przedstawiciel firmy Smurfit Kappa - pani Weronika, Leasing Polski - panie: Magdalena Majek i Marlena Parandyk oraz rodzice wychowanków. Spotkanie wigilijne jest głęboko zakorzenione w tradycji naszej placówki, więc i tym razem nie mogło zabraknąć elementów, które zawsze towarzyszą tej uroczystości, czyli przedstawienia jasełkowego w wykonaniu wychowanków. Pięknych, świątecznych życzeń, które złożyła Pani Dyrektor Janina Gruchocka zebranym gościom, pracownikom i uczniom. Wizyty Świętego Mikołaja, który obdarował prezentami wszystkich wychowanków. W tym roku sponsorami upominków byli: Leasing Polski, LOTOR NORTH, Vivadental, Smurfit Kappa oraz ZTM Gdańsk. Dzień ten był wyjątkowy, a świąteczna atmosfera udzieliła się wszystkim obecnym, tworząc niezapomniane wrażenia i wzmacniając poczucie wspólnoty.",
      images: [mo1],
    },
    {
      title: "Dzień Babci i Dziadka",
      content: "Babcia i Dziadek to słowa, które każdemu dziecku kojarzą się z ciepłem, miłością i wszystkim, co dobre. Dlatego też wychowankowie naszej placówki zaprosili swoje Babcie oraz Dziadków na uroczystość przygotowaną specjalnie z tej okazji. Licznie przybyli goście podziwiali swoje wnuki podczas specjalnie dla nich przygotowanego programu artystycznego. W przepięknej scenografii oraz wyjątkowej atmosferze obyła się prezentacja zdjęć dziadków z wnukami, była możliwość wykonania wspólnej fotografii. Odbyły się także konkurencje, które dodatkowo uświetniły to wyjątkowe spotkanie. Zabawy te zostały starannie zaplanowane tak, aby umożliwić zarówno babciom, dziadkom, jak i ich wnukom wspólną zabawę, współzawodnictwo oraz radosne spędzenie czasu. Następnie wychowankowie zaprosili swoich gości na słodki poczęstunek, który dzień wcześniej przygotowali, aby w szczególny sposób okazać swoim bliskim szacunek i po raz kolejny podziękować za miłość, cierpliwość i zrozumienie. To była naprawdę wyjątkowa uroczystość, pełna uśmiechu, radości i dumy. Szczęśliwe i rozpromienione twarze babć i dziadków dały wyraz tego, jak ważne są takie spotkania i chwile spędzone wspólnie z wnukami.",
      images: [mo1],
    },
    {
      title: "Bal Karnawałowy",
      content: "W dniu 23 stycznia 2024 r. odbył się Bal Karnawałowy, który był prawdziwą ucztą dla zmysłów. Uczniowie, przebrani w kolorowe, bajkowe stroje, tworzyli radosną atmosferę, która udzielała się wszystkim obecnym. Muzyka była doskonale dopasowana do gustów młodych uczestników, co skutkowało nieustającą zabawą na parkiecie. Różnorodne zabawy i konkursy sprawiały, że każdy mógł znaleźć coś dla siebie, a wspólna zabawa zbliżała wychowanków, wzmacniając ich poczucie wspólnoty. Chwile odpoczynku przy słodkim poczęstunku dawały możliwość chwili relaksu i rozmów. Bez wątpienia, ten dzień na długo zostanie w pamięci, jako czas radości, zabawy i niezapomnianych wrażeń.",
      images: [mo1],
    },
    {
      title: "Mikołajki",
      content: "6 grudnia jest dniem szczególnym, zgodnie z tradycją do ośrodka zawitał Święty Mikołaj. Jest to dobry znak, świadczący o tym, że byliśmy grzeczni i zasłużyliśmy na prezenty. Mikołaje ze Stowarzyszenia Motocyklowego LOTOR NORTH kolejny raz obdarowali wychowanków upominkami, za co bardzo serdecznie dziękujemy. Z tej okazji uczniowie napisali listy do Świętego Mikołaja oraz przygotowali kartki pocztowe do kolegów i koleżanek z ośrodka, które wysyłali na specjalnie na ten dzień przygotowanej poczcie. To kolejny element, który dodaje uroku tej wyjątkowej tradycji. To wszystko sprawia, że dzień ten staje się nie tylko okazją do otrzymania prezentów, robienia pięknych zdjęć, ale także czasem pełnym ciepła, życzliwości i wspólnego celebrowania radosnego ducha świąt. Mamy nadzieję, że w przyszłym roku ponownie się spotkamy i będziemy mogli cieszyć się z wizyty Świętego Mikołaja.",
      images: [mo1],
    },
    {
      title: "Andrzejki",
      content: "29 listopada w ośrodku zapanowała wyjątkowa, magiczna atmosfera związana z obchodami Andrzejek. Wychowankowie mieli szansę poznać przepowiednie dotyczące ich przyszłości za sprawą różnorodnych tradycyjnych wróżb. Do atrakcji należało ustawianie butów w kierunku drzwi, co miało wskazywać, kto jako pierwszy wyjdzie za mąż lub ożeni się. Przekłuwanie serca z wpisanymi imionami w poszukiwaniu przyszłego partnera. Lanie wosku do wody w celu odkrycia tajemniczych symboli przyszłości. Obieranie jabłka i rzucanie obierki, by odnaleźć inicjał imienia przyszłego partnera lub partnerki, a także losowanie kart z przepowiednią. To wydarzenie stało się doskonałą okazją do wspólnej zabawy i integracji, a przepowiednie dostarczyły uczestnikom wielu powodów do śmiechu i radości.",
      images: [mo1],
    },
    {
      title: "Szkoła do hymnu",
      content: "Święto Niepodległości jest jednym z najważniejszych dni w polskiej historii, symbolizującym naszą walkę o wolność i suwerenność. To dzień, w którym oddajemy hołd bohaterom, którzy poświęcili wiele, abyśmy mogli cieszyć się niepodległym państwem. Dlatego też, już od najmłodszych lat, ważne jest kształtowanie w dzieciach poczucia przynależności do Polski oraz szacunku dla wartości, jakie reprezentuje nasza Ojczyzna. W naszym ośrodku również nie zapominamy o znaczeniu tego wyjątkowego święta. Nasi wychowankowie włączyli się aktywnie w obchody Święta Niepodległości poprzez udział w akcji 'Szkoła do hymnu'. W dniu 10 listopada, tuż przed uroczystością 11 listopada, odśpiewaliśmy hymn narodowy 'Mazurek Dąbrowskiego' o godzinie 11:11. To ważny gest, który manifestuje naszą miłość do ojczyzny i dumę z bycia Polakami. Ponadto, nasi wychowankowie wykazali się kreatywnością, tworząc wspaniałe prace plastyczne z wykorzystaniem kolorów narodowych, czyli białego i czerwonego. Niech nasza miłość do Polski i duma z naszej historii towarzyszą nam zawsze!",
      images: [mo1],
    },
    {
      title: "Akcja #SzkołaPamięta.",
      content: "Jak co roku Ośrodek Rewalidacyjno-Wychowawczego w Giemlicach upamiętnił Dzień Pamięci o Zmarłych. Nasi uczniowie wspólnie z nauczycielami oraz opiekunami przygotowali piękne wiązanki, przynieśli znicze oraz udali się na pobliski cmentarz by uczcić pamięć o zmarłych.",
      images: [mo1],
    },
    {
      title: "Przyprawy",
      content: "W październiku grupy rewalidacyjne i przedszkolaki z ORW Giemlice pracowały wspólnie metodą projektu badawczego. Tematem projektu były PRZYPRAWY. Przez trzy tygodnie wspólnie, a co najważniejsze, poznawaliśmy różne przyprawy i zioła. W pierwszym tygodniu działaliśmy w kuchni, używając różnych przypraw. W drugim tygodniu poznawaliśmy lecznicze przyprawy i zioła. Trzeci tydzień poświęcony był przyprawom stosowanym w różnych kosmetykach. Podsumowaniem projektu była interaktywna prezentacja, dzięki której pozostali wychowankowie ośrodka mogli poznać nasz projekt badawczy „Przyprawy”.",
      images: [mo1],
    },
    {
      title: "Podziękowania dla Smurfit Kappa",
      content: "Dnia 6 pazdziernika otrzymaliśmy cudowane prezenty w postaci dużego auta dostawczego i mapy - puzzli przedstawiającej Europe, które w całości zostały wykonane z kartonu. Nasi uczniowie przez trzy dni ozdabiali samochód według własnego pomysłu. Przenty cudowne, a radości jeszcze wiecej. Dziekujemy firmie Smutfit Kappa, Panu Piotrowi Sylwestrzak za pomysl, projektantom za projekt, a Pani Malgosi Kaulhausen za osobiste doręczenie i złożenie autka w całość.",
      images: [mo1],
    },
    {
      title: "Dzień Komisji Edukacji Narodowej",
      content: "13 października 2023 roku w naszej placówce odbyły się uroczystości z okazji Dnia Edukacji Narodowej. Pani Dyrektor Janina Gruchocka złożyła życzenia oraz wręczyła nagrody. Nasi wychowankowie przygotowali wspaniałe prezenty, które otrzymali nauczyciele i pracownicy ośrodka. Te drobne gesty były wyrazem wdzięczności za ich pracę i oddanie. Po apelu wszyscy mieli okazję skosztować pysznego poczęstunku przygotowanego przez wyróżnionych pracowników. To był moment, kiedy mogliśmy razem usiąść, porozmawiać i celebrować to wyjątkowe święto. Uroczystość przebiegła w miłej i radosnej atmosferze. Jesteśmy dumni, że możemy być częścią tej społeczności edukacyjnej i razem tworzyć przyszłość naszych wychowanków. Szczęśliwego Święta Nauczycieli i Pracowników Oświaty!",
      images: [mo1],
    },
    {
      title: "Dzień Chłopaka",
      content: "29 września mieliśmy okazję uczcić Dzień Chłopaka. Nasi wychowankowie ubrali odświętne koszule. Dodatkowo, nie zabrakło własnoręcznie wykonanych much na szyi. Efekt ich wysiłku i kreatywności był po prostu zachwycający! To była prawdziwa uczta dla oczu, widzieć jak dumni są z efektu swojej pracy. Dzień Chłopaka to nie tylko elegancki ubiór, ale przede wszystkim czas na zabawę i wspólne chwile. Chłopcy wraz z nauczycielami i opiekunami spędzili czas grając w ulubione gry planszowe. Śmiech, rywalizacja i wspólna rozrywka to doskonały sposób na umocnienie przyjaźni i wspólnoty w ośrodku. Na zakończenie dnia nasi chłopcy zostali obdarowani drobnymi upominkami, które były wyrazem naszej troski i wdzięczności za ich obecność w naszym ośrodku. Świętowanie Dnia Chłopaka to dowód na to, że każdy dzień to wyjątkowa okazja do nauki, zabawy i wzajemnej inspiracji.",
      images: [mo1],
    },
    {
      title: "XIII BIESIADA ZIEMNIACZANA",
      content: "W dniu dzisiejszym po raz 13 odbyła się impreza - podziękowanie dla naszych wolontariuszy i sponsorów. Jak zawsze rozpoczęliśmy od warsztatów, gdzie przygotowaliśmy potrawy z ziemniaków, również ludziki warzywne. Radości i zabawy było co nie miara. Potem wspólne biesiadowanie i pałaszowanie naszych smakołyków. Jak widać w naszej relacji pomagali nam przedstawiciele władz w osobach: Podsekretarz Stanu w Ministerstwie Aktywów Państwowych Pan Karol Rabenda i Poseł na Sejm Pan Andrzej Kobylarz. Warzywne ludziki w Ich wykonaniu to ,,powrót do przyszłości,,. Dziękujemy wszystkim naszym gościom, rodzicom i uczniom, a także wszystkim pracownikom za sobotnie biesiadowanie. Kolejne już za rok. Link do artykułu na stronie pruszczanie.pl: https://pruszczanie.pl/swieto-ziemniaka-w-osrodku-rewalidacyjno-wychowawczym-zulawski-slonecznik-w-giemlicach/",
      images: [mo1],
    },
    {
      title: "EDUKACYJNY PIKNIK RODZINNY z okazji Europejskiego Tygodnia Mobilności",
      content: "Kadra Ośrodka Rewalidacyjno-Wychowawczego 'Żuławski Słonecznik' po raz kolejny wsparła Piknik zorganizowany przez Zarząd Transportu Miejskiego w Gdańsku. W tym roku byliśmy zaproszeni do uczestnictwa jako partnerzy. Pogoda była przepiękna, odwiedzający dopisali tłumnie. Nasze stanowisko cieszyło się dużym zainteresowaniem. Razem z dziećmi robiliśmy rozmaite pojazdy: samochody, autobusy, tramwaje, rakiety, łodzie oraz inne fantazyjne wehikuły. Za materiał posłużyły materiały przeznaczone do recyklingu. Bardzo dziękujemy gdańskiemu ZTM za możliwość uczestniczenia w tym fantastycznym wydarzeniu!",
      images: [mo1],
    },
    {
      title: "Wycieczka do Torunia",
      content: " W środę, 13 września, udaliśmy się na wycieczkę edukacyjną do Torunia, rodzinnego miasta Mikołaja Kopernika. Naszym pierwszym celem były zajęcia w Żywym Muzeum Piernika, gdzie mogliśmy poznać tajniki wypieku korzennych pierników. Było to fascynujące doświadczenie, a wypieczony piernik stał się pamiątką wizyty. Następnie przeszliśmy się uliczkami Torunia, odwiedzając pomnik wybitnego astronoma Mikołaja Kopernika. Ostatnim bardzo wyczekiwanym punktem wycieczki był posiłek w restauracji McDonalds. Pogoda dopisała, a cały dzień spędziliśmy aktywnie, czerpiąc niezapomniane wrażenia. Już teraz planujemy kolejne wyjazdy, by odkrywać nowe miejsca i zdobywać nowe doświadczenia.",
      images: [mo1],
    },
    {
      title: "Podziękowania dla Grupy Smoleń",
      content: "Jak wiele radości może sprawić GRUPA Smoleń przekonali się uczniowie z grupy 2. Dzięki wielkiemu sercu otrzymaliśmy wymarzone regały do naszej sali i zabawki rozwijające kreatywność i małą motorykę. Chłopcy z dużym zaangażowaniem uczestniczyli w odbiorze paczek i ich rozpakowywaniu. Bardzo serdecznie dziękujemy.",
      images: [mo1],
    },
    {
      title: "Rozpoczęcie roku szkolnego 2023/2024",
      content: "4 września 2023 r. był w naszej placówce dniem szczególnym i uroczystym. Wychowankowie pożegnali wakacje, a przywitali nowy rok szkolny 2023/2024. Uroczystość rozpoczęła się przemówieniem Dyrektor Ośrodka Rewalidacyjno – Wychowawczego „Żuławski Słonecznik” Janiny Gruchockiej, która serdecznie powitała wszystkich uczniów – w szczególności tych, którzy po raz pierwszy przybyli do naszej placówki, rodziców oraz pracowników ośrodka. Po zakończeniu uroczystości nastąpiły pierwsze powakacyjne spotkania z wychowawcami. Wychowankowie przybyli z optymistycznym nastawieniem i ogromnym zapałem do pracy. Przed nami czas pełen nowych wyzwań i wrażeń. W nowym roku szkolnym życzymy wielu sukcesów wszystkim uczniom, nauczycielom i rodzicom.",
      images: [mo1],
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
