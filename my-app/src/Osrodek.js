import React from 'react';
import './Osrodek.css'; // Zakładając, że masz osobny plik CSS dla tego komponentu

const Osrodek = () => {
  return (
    <div className="osrodek">
      <section id="placowka">
        <h2>Placówka</h2>
        <p>Ośrodek jest miejscem, gdzie dzieci i młodzież otrzymują wsparcie w swoim rozwoju. Nasza placówka oferuje różnorodne programy terapeutyczne, edukacyjne oraz zajęcia rozwijające umiejętności społeczne i emocjonalne.</p>
      </section>

      <section id="dokumenty">
        <h2>Dokumenty konieczne do przyjęcia dziecka do ośrodka</h2>
        <p>Do przyjęcia dziecka na wychowanka Ośrodka Rewalidacyjno-Wychowawczego ŻUŁAWSKI SŁONECZNIK konieczne są następujące dokumenty:</p>
        <ul>
          <li>orzeczenie o niepełnosprawności wydane przez Powiatowe Centrum Pomocy Rodzinie</li>
          <li>orzeczenie do kształcenia specjalnego lub orzeczenie do zajęć rewalidacyjno-wychowawczych wydane przez Poradnię Psychologiczno-Pedagogiczną</li>
          <li>wniosek rodziców (do wypełnienia na wzorze dostępnym w ORW)</li>
          <li>dzieci spoza rejonu potrzebują skierowanie od Starosty lub Burmistrza</li>
        </ul>
        <p>Do przyjęcia dziecka na zajęcia Wczesnego Wspomagania Rozwoju konieczne są dokumenty:</p>
        <ul>
          <li>opinia o potrzebie wczesnego wspomagania rozwoju wydana przez Poradnię Psychologiczno-Pedagogiczną</li>
        </ul>
      </section>

      <section id="wwr">
        <h2>Wczesne Wspomaganie Rozwoju</h2>
        <p>Wczesne wspomaganie rozwoju to nasza misja. Oferujemy kompleksowe wsparcie dla dzieci z różnymi potrzebami, pomagając im w osiąganiu ich pełnego potencjału.</p>
      </section>

      <section id="cele">
        <h2>Cele i metody pracy</h2>
        <p>Ośrodek Rewalidacyjno-Wychowawczy w Giemlicach jest publiczną, specjalistyczną placówką oświatową prowadzoną przez Gminę Cedry Wielkie. Ośrodek przeznaczony jest dla dzieci i młodzieży z niepełnosprawnością intelektualną w stopniu umiarkowanym i znacznym z niepełnosprawnością sprzężoną oraz dla dzieci i młodzieży z niepełnosprawnością intelektualną w stopniu głębokim, w wieku 3 do 25 lat, potrzebujących kompleksowej, wieloprofilowej pomocy. Głównym zadaniem ORW jest specjalistyczna rehabilitacja dzieci i młodzieży, dążenie do maksymalnej możliwej samodzielności wychowanków, a także ich integracja społeczna.</p>
        <p>Wychowankowie realizują w placówce obowiązek szkolny. Dla każdego z wychowanków zespół terapeutyczny przygotowuje Indywidualny Program Edukacyjno-Terapeutyczny (IPET), który określa szczegółowe cele w poszczególnych sferach rozwojowych oraz metody dążenia do ich realizacji. IPET uwzględnia potrzeby i możliwości rozwojowe wychowanka.</p>
        <p>Wśród realizowanych metod terapii znajdują się:</p>
        <ul>
          <li>hydroterapia (we współpracy z Fundacją WRÓĆ, dofinansowana przez PFRON)</li>
          <li>hipoterapia (we współpracy z Fundacją WRÓĆ, dofinansowana przez PFRON)</li>
          <li>rehabilitacja ruchowa</li>
          <li>logopedia (realizowana przez dwóch logopedów)</li>
          <li>terapia psychologiczna</li>
          <li>terapia pedagogiczna</li>
          <li>metoda Ruchu Rozwijającego Weroniki Sherborne</li>
          <li>metoda Knihlów</li>
          <li>zajęcia w Sali Doświadczania Świata</li>
          <li>arteterapia (w tym: biblioterapia, teatroterapia, muzykoterapia, plastykoterapia)</li>
          <li>kulturoterapia (w tym: terapia materiałami naturalnymi, ludoterapia, horikuloterapia, zajęcia kulinarne, zajęcia informatyczne)</li>
        </ul>
        <p>Podstawowe założenia pracy placówki obejmują:</p>
        <ul>
          <li>dostrzeganie w każdym dziecku jego potencjału i zdolności</li>
          <li>rozwijanie i umacnianie wiary we własne siły</li>
          <li>indywidualne traktowanie każdego wychowanka z uwzględnieniem jego możliwości i ograniczeń</li>
          <li>integrowanie całej społeczności ośrodka</li>
          <li>inspirowanie do twórczego rozwoju wychowanków, a także rodziców i nauczycieli</li>
          <li>zapewnienie wychowankom bezpieczeństwa</li>
        </ul>
      </section>
    </div>
  );
};

export default Osrodek;
