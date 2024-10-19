import React, { useState } from 'react';
import './CSS/news.css'; 

import wa1_22 from './img/wa1_22.jpg';
import wa2_22 from './img/wa2_22.jpg';
import wa3_22 from './img/wa3_22.jpg';
import wa4_22 from './img/wa4_22.jpg';
import wa5_22 from './img/wa5_22.jpg';

import ol1_22 from './img/ol1_22.jpg';
import ol2_22 from './img/ol2_22.jpg';
import ol3_22 from './img/ol3_22.jpg';
import ol4_22 from './img/ol4_22.jpg';
import ol5_22 from './img/ol5_22.jpg';
import ol6_22 from './img/ol6_22.jpg';
import ol7_22 from './img/ol7_22.jpg';
import ol8_22 from './img/ol8_22.jpg';
import ol9_22 from './img/ol9_22.jpg';
import ol10_22 from './img/ol10_22.jpg';

import wi1_22 from './img/wi1_22.jpg';
import wi2_22 from './img/wi2_22.jpg';
import wi3_22 from './img/wi3_22.jpg';
import wi4_22 from './img/wi4_22.jpg';
import wi5_22 from './img/wi5_22.jpg';
import wi6_22 from './img/wi6_22.jpg';
import wi7_22 from './img/wi7_22.jpg';
import wi8_22 from './img/wi8_22.jpg';
import wi9_22 from './img/wi9_22.jpg';
import wi10_22 from './img/wi10_22.jpg';
import wi11_22 from './img/wi11_22.jpg';
import wi12_22 from './img/wi12_22.jpg';
import wi13_22 from './img/wi13_22.jpg';
import wi14_22 from './img/wi14_22.jpg';

import ko1_22 from './img/ko1_22.jpg';
import ko2_22 from './img/ko2_22.jpg';
import ko3_22 from './img/ko3_22.jpg';
import ko4_22 from './img/ko4_22.jpg';
import ko5_22 from './img/ko5_22.jpg';
import ko6_22 from './img/ko6_22.jpg';
import ko7_22 from './img/ko7_22.jpg';
import ko8_22 from './img/ko8_22.jpg';
import ko9_22 from './img/ko9_22.jpg';

import kn_22 from './img/kn_22.jpg';

import fe_22 from './img/fe_22.jpg';

import sw_22 from './img/sw_22.jpg';

import re1_22 from './img/re1_22.jpg';
import re2_22 from './img/re2_22.jpg';
import re3_22 from './img/re3_22.jpg';
import re4_22 from './img/re4_22.jpg';
import re5_22 from './img/re5_22.jpg';

import tc1_22 from './img/tc1_22.jpg';
import tc2_22 from './img/tc2_22.jpg';
import tc3_22 from './img/tc3_22.jpg';
import tc4_22 from './img/tc4_22.jpg';
import tc5_22 from './img/tc5_22.jpg';

import mi1_22 from './img/mi1_22.jpg';
import mi2_22 from './img/mi2_22.jpg';
import mi3_22 from './img/mi3_22.jpg';
import mi4_22 from './img/mi4_22.jpg';
import mi5_22 from './img/mi5_22.jpg';

import an1_22 from './img/an1_22.jpg';
import an2_22 from './img/an2_22.jpg';
import an3_22 from './img/an3_22.jpg';
import an4_22 from './img/an4_22.jpg';
import an5_22 from './img/an5_22.jpg';

import zi1_22 from './img/zi1_22.jpg';
import zi2_22 from './img/zi2_22.jpg';
import zi3_22 from './img/zi3_22.jpg';
import zi4_22 from './img/zi4_22.jpg';
import zi5_22 from './img/zi5_22.jpg';
import zi6_22 from './img/zi6_22.jpg';
import zi7_22 from './img/zi7_22.jpg';
import zi8_22 from './img/zi8_22.jpg';
import zi9_22 from './img/zi9_22.jpg';
import zi10_22 from './img/zi10_22.jpg';

import wak_22 from './img/wak_22.jpg';

import kol1_22 from './img/kol1_22.jpg';
import kol2_22 from './img/kol2_22.jpg';


const News = () => {
  const posts = [
    {
      title: " Warsztaty ŻUŁAWY GDAŃSKIE – MOJA MAŁA OJCZYZNA ",
      content: "Dnia 06.06.2023r w Ośrodku Rewalidacyjno – Wychowawczym Żuławski Słonecznik w Giemlicach odbyły się po raz pierwszy Warsztaty zorganizowane w ramach Konkursu : ŻUŁAWY GDAŃSKIE – MOJA MAŁA OJCZYZNA. Impreza była przeznaczona dla dzieci z gminy Cedry Wielkie uczęszczających do klas 0. Przyjechali do nas reprezentanci następujących placówek: Przedszkole Samorządowe nr 2 w Cedrach Małych, Szkoła Podstawowa w Cedrach Małych, Szkoła Podstawowa w Cedrach Wielkich i Szkoła Podstawowa w Wocławach. ORW reprezentowali chłopcy z odziału przedszkolnego.Nasz gość honorowy, Wójt Gminy Cedry Wielkie Pan Janusz Goliński uroczyście rozpoczął Żuławskie Warsztaty oraz przywiózł upominki dla każdego uczestnika. Kibicował również zaproszonym dzieciom podczas pokonywania wszystkich konkurencji. Gościliśmy również Kierownika Referatu ds. Oświaty i Sportu Panią Sylwię Makrucką i Radną Gminy Cedry Wielkie Panią Marię Pomirską. Dzięki wsparciu tak wyśmienitych przedstawicieli Gminy, dzieci uczestniczyły w różnorodnych konkurencjachz werwą i pełnym zaangażowaniem.W rozdaniu medali uczestniczyła również Asystentka Biura Zarządu SMURFIT KAPPA Sp.z o.o. Oddział w Gdańsku Pani Małgorzata Kaulhausen. Dzięki jej zaangażowaniu firma Smurfit Kappa zasponsorowała: medale dla dzieci, dwa duże wiatraki do pomalowania oraz małe wiatraczki do samodzielnego ozdobienia.Pogoda tego dnia nam dopisała i mamy nadzieję, że zobaczymy się za rok. Bardzo dziękujemy wszystkim zproszonym gościom, sponsorowi, uczestnikom warsztatów oraz naszym pracownikom za zaangażowanie.",
      images: [wa1_22,wa2_22,wa3_22,wa4_22,wa5_22],
    },
    {
      title: "XIII OLIMPIADA PRZYJAŹNI ",
      content:" W ostatnią sobotę maja 2023 roku odbyła się na terenie Ośrodka Rewalidacyjno – Wychowawczego ,,Żuławski Słonecznik” w Giemlicach XIII Olimpiada Przyjaźni. Piękna aura sprzyjała temu niesamowitemu spotkaniu, goście dopisali w wyśmienitych humorach. Przyjechali do nas nasi przyjaciele z OREW w Jezierniku, OREW z Lasowic, OREW w Czarnej Wodzie, OREW w Okrągłej Łące i Prabutach,Przedszkole Kolorowe przy OREW w Kwidzynie, OREW Caritas z Trąbek Wielkich. Równo o godzinie 10.00 Nasza Dyrekcja Janina Gruchocka otworzyła oficjalnie Olimpiadę. Olimpiada Przyjaźni to forma paraolimpiady mająca na celu zintegrowanie społeczeństwa, pokazanie, że wszyscy możemy się wspólnie cudownie bawić bez barier w atmosferze ciepła i uśmiechu. Nasi uczniowie jak i zaproszeni gości mogli sprawdzić się i swoje możliwości w każdej z 14 przygotowanych konkurencji sportowych. Za każdą odbytą konkurencję można było zdobyć jeden punkt w postaci pieczątki. Po uzbieraniu wszystkich 14tu pieczątek przyszedł czas na odbiór nagród ufundowanych przez naszych Darczyńców. Przez cały czas trwania imprezy, otwarty był dla wszystkich kącik z prowiantem. Można było posilić się pyszną zupką ziemniaczaną, przetworami mięsnymi z grilla oraz pysznymi słodkościami. Opiekunowie, Rodzice mogli wypić ciepłą kawę, posilić się w czasie, gdy dzieci zajadały się pysznymi rurkami z kremem, czy pysznymi lodami. Uczestnicy na początku rozegrali Mecz Wielkiej Piłki, podczas którego trzeba było strzelić gola ogromną piłką – drużyny zmieniały zawodnikó co chwilę, ponieważ dyscyplina wymago niesamowitej kondycji. Podczas trwania olimpiadowych konkurencji można było skożystać z takich atrakcji jak: zwiedzanie wozu strażackiego, atrakcje na dmuchanej zjeżdzalni, puszczanie wielkich baniek czy relaks przy koniach ze stajni Złota Podkowa w Giemlicach. Specjalnym gościem byli panowie z Ogniwa Bez Barier oraz zawodnicy Rugby Ogniwa Sopot, którzy dali pokaz treningu oraz na zakończenie przeprowadzili mecz z naszymi uczestnikami. Wszyscy zgromadzeni zgodnie przyznali, że to był świetnie spędzony czas. Każdy uczestnik otrzymał medal ,, Olimpiady Przyjaźni” wręczany przez zaproszonych gości: Pana Wójta Janusza Golińskiego oraz Przewodniczącą Komisji Oświatowej Gminy Cedry Wielkie Panią Radną Marią Pomirską oraz Kierownik Oświaty Panią Sylwię Makrucką. Nasi przyjaciele z zaprzyjaźnionych ośrodków, przedszkolaki z Samorządowego Przedszkola już czekają na koleją paraolimpiadę, która odbędzie się za rok. Szanowni Goście, dziękujemy za wspólnie cudownie spędzony czas. Składamy serdeczne podziękowania wszystkim Darczyńcom, ludziom, którzy otworzyli swoje serca na pomoc w zorganizowaniu Olimpiady oraz przede wszystkim naszym cudownym wolontariuszom – bez których tak wielka impreza nie mogłby się odbyć! Dziękujemy i do zobaczenia za rok! Nasi Sponsorzy :AFTI,AUTO- DISEL,AUTO KAJTEK,BANK SPÓŁDZIELCZY W PRUSZCZU GDAŃSKIM, ODDZIAŁ W CEDRACH WIELKICH, p.,Hanna Rydlewska,BASE GROUP,BIURO RACHUNKOWE GIEMLICE,BOOMBIT,BRUNO-TASSI PÓŁNOC,CARRIER,CENTRUM AQUA – Centrum Instalacyjne Rafał Loroff,Damian Walencikowski – Usługi koparką i minikoparką,DK – Dominik Kostecki Usługi Budowlane Pszczółki,EL- HURT Elbląskie Centrum Mięsno-Nabiałowe,ELEWATOR Jacek Włodarczyk,ELF – Sklep Pruszcz Gdański,ENERGA,FINASTRA,FUNDACJA OGNIWO BEZ BARIER,HACO Sp. Z o.o. Konstrukcje okrętowe Pruszcz Gdański,HURTOWNIA SZCZEPAN, Sklep AGD Gdańsk,IKEA SKLEP W GDAŃSKU,JYSK Pruszcz Gdański,KS – KOWNACKI SERWIS, Barbara Kownacka,KRZYSZTOF PUDYSZEK – Kierownik Referatu Ochrony Środowiska Urzędu Gminy Cedry Wielkie,LEASING POLSKA,LODY ŚWIDERKI PRZYWIDZ,LOTOR – Stowarzyszenie Motocyklowe,MAJĄTEK ZIEMSKI TRUTNOWY,METRA FHU ŁUKA,MONIKA KLIN,NEW LOOK BY ADRIANNA SALON FRYZJERSKI,OdiDO Jolanta Ziewiec,PELLOWSKI,PGNiG,PIEKARNIA PSZCZÓŁKI,POMORSKIE MŁYNY TADEUSZ RYBAK,PRUSZCZANIE.PL,PZU – Teresa Gertner, Marta Suhak,ROLTOP,Rusztowania HURAGAN Waldemar Glas,SALVIT-PRIMA,SEGREGATORY24.PL – Anita Chajbos,SCALAC,SMURFIT KAPPA,SOŁECTWO GIEMLICE,STAJNIA ZŁOTA PODOWAGIEMLICE,TUPATRZ STUDIO,WOJAR ROLETY,VIVADENTAL,ZARZĄD TRANSPORTU MIEJSKIEGOW GDAŃSKU,ŻUŁAWSKI BANK SPÓŁDZIELCZY ",
      images: [ol1_22,ol2_22,ol3_22,ol4_22,ol5_22,ol6_22,ol7_22,ol8_22,ol9_22,ol10_22],
    },
    {
      title: "PIERWSZY DZIEŃ WIOSNY",
      content: "W dniu dzisiejszym w Ośrodku przywitaliśmy Panią Wiosnę. Pożegnaliśmy się również z Panią Zimą, która obiecała wrócić w grudniu i dostarczyć dużo białego puchu na święta. Wspólnie wykonaliśmy Marzanny, które zostały spalone po ognisku. Były pyszne kiełbaski, które mogliśmy samodzielnie upiec. Pogada dziś była idealna na spotkanie przy ognisku.",
      images: [wi1_22,wi2_22,wi3_22,wi4_22,wi5_22,wi6_22,wi7_22,wi8_22,wi9_22,wi10_22,wi11_22,wi12_22,wi13_22,wi14_22],
    },
    {
      title: "Dzień Kota",
      content: "17 luty jest Dniem Kota. Postanowiliśmy z naszymi uczniami upamiętnić te wyjątkowe zwierzęta, które nam towarzyszą na codzień. Uczniowie przygotowali tematyczne prace plastyczne. Każdy otrzymał upominek w postaci odznaki oraz woreczka z kocim akcentem, które pomagała przygotować grupa IV. Nasz ośrodkowy kot Luis również otrzymał prezent, który natychmiast zaczął testować",
      images: [ko1_22,ko2_22,ko3_22,ko4_22,ko5_22,ko6_22,ko7_22,ko8_22,ko9_22],
    },
    {
      title: "Rozstrzygnięcie konkursu plastycznego 'Solne śnieżynki'",
      content: "W miesiącu styczniu odbył się w ośrodku konkurs plastyczny pt. 'Solne śnieżynki'. Wychowankowie za pomocą soli kuchennej oraz kleju wykonali prace plastyczne. Wszystkie prace zajęły pierwsze miejsce a wychowankowie zostali nagrodzeni nagrodami.",
      images: [kn_22],
    },
    {
      title: "Powrót z ferii zimowych",
      content: "W tym roku powrót z ferii zimowych był wyjątkowy. Można było dzisiaj spotkać u nas strażaka, Minionki, księżniczkę i wielu innych bohaterów z bajek. Czekał na uczniów bal karnawałowy z licznymi atrakcjami. Dobra zabawa przy muzyce, różnorodne zabawy, kącik plastyczny i wiele innych niespodzianek. Każdy lubi zabawę przy muzyce w gronie przyjaciół.",
      images: [fe_22],
    },
    {
      title: "Spotkanie świąteczne",
      content: "W tym roku inaczej niż dotychczas wyglądało nasze spotkanie świąteczne. Zamiast tradycyjnych występów przygotowaliśmy koncert świąteczny. Każda grupa wystąpiła z wybraną piosenką. Pięknie brzmiały śpiewane kolędy i piosenki świąteczne w wydaniu wychowanków Ośrodka. Nowością były też warsztaty świąteczne, gdzie dzieci z rodzicami przygotowały dekoracje. Mikołaj odwiedził wszystkie dzieci, bo zawsze są bardzo grzeczne. Każda grupa przygotowała też tradycyjny poczęstunek. Po latach pandemii mogliśmy ponownie spotkać się w tym dniu z rodzicami i zaproszonymi gośćmi.",
      images: [sw_22],
    },
    {
      title: "Wystawa egzotycznych robali",
      content: "Serdeczne podziękowania dla Pana Jarosława Rejmer, który odwiedził nas z dużą kolekcją egzotycznych stworzeń. Mogliśmy zobaczyć kameleony, modliszki, patyczaki, pająki i wiele innych. Dziękujemy",
      images: [re1_22,re2_22,re3_22,re4_22,re5_22],
    },
    {
      title: "Wycieczka do Narodowego Muzeum Morskiego w Tczewie",
      content: "Mieliśmy ogromną przyjemność uczestniczyć w warsztatach piernikowych zorganizowanych przez pracowników Muzeum. Dziękujemy za wspólne chwile.",
      images: [tc1_22,tc2_22,tc3_22,tc4_22,tc5_22],
    },
    {
      title: "Mikołajki ",
      content: "Serdeczne podziękowania dla Klubu Motocyklowego Lotor za wspaniałe prezenty i niezapomniane chwile spędzone z Mikołajami na Motorach. Jesteście cudowni, dziękujemy!",
      images: [mi1_22,mi2_22,mi3_22,mi4_22,mi5_22],
    },
    {
      title: "Andrzejki",
      content: "W tym roku bal Andrzejkowy był z motywem przewodnim lat 80-tych. Tradycyjnie odbyło się lanie wosku i wiele innych zabaw w wróżenie. Radośnie spędziliśmy czas na wspólnych zabawach i tańcach.",
      images: [an1_22,an2_22,an3_22,an4_22,an5_22],
    },
        {
      title: "Biesiada ziemniaczana",
      content: "Kolejna biesiada ziemniaczana za nami. W tym roku licznie zaproszeni goście dopisali. Uczestników biesiady czekały liczne atrakcje sportowe i artystyczne. Tradycją jest udział w przygotowaniu wielu przysmaków, w których pierwsze skrzypce grają ziemniaki. Nauczyliśmy się też skąd się biorą ziemniaki z przygotowanej prezentacji. Wszyscy z wielkimi uśmiechami i pełnymi brzuchami mogliśmy wspólnie spędzić czas. Bardzo nam brakowało tych spotkań w czasie pandemii..",
      images: [zi1_22,zi2_22,zi3_22,zi4_22,zi5_22,zi6_22,zi7_22,zi8_22,zi9_22,zi10_22],
    },
    {
      title: "Prelekcja „Bezpieczeństwo na drodze”",
      content: "Dnia 2 września br. Uczniowie naszego Ośrodka uczestniczyli w prelekcji na temat bezpieczeństwa, która została przeprowadzona przez przedstawiciela Komisariatu w Cedrach Wielkich – Pana Grzegorza Kucharskiego. Dzieci miały okazję przypomnieć sobie czym zajmuje się policjant, jakie są podstawowe zasady zachowania bezpieczeństwa na drodze do i z ośrodka. Dzieci chętnie uczestniczyły w spotkaniu. Spotkanie z Panem Policjantem na długo zostanie w pamięci dzieci. Dziękujemy komendantowi Komisariatu w Cedrach Wielkich Panu Markowi Silarskiemu za coroczną współpracę.",
      images: [wak_22],
    },
    {
      title: "Półkolonie w ORW 2022",
      content: "W dniach 22-26.08.2022 W Ośrodku odbywały się półkolonie. Głównym celem było wdrożenie i przystosowanie poprzez zabawę do środowiska ośrodka po wakacyjnej przerwie. Budowanie poczucia bezpieczeństwa w kontakcie z drugim człowiekiem. Aktywizacja dziecka do interakcji z innymi ludźmi oraz rozwijanie umiejętności podtrzymywania kontaktów. Każdego dnia odbywały się atrakcyjne zabawy ruchowe oraz zajęcia kreatywne.",
      images: [kol1_22,kol2_22],
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
