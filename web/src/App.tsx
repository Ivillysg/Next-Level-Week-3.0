import React from 'react';

// styles
import './styles/global.css';
import './styles/pages/landing.css';

import { FiArrowRight } from 'react-icons/all';
import Logo from './assets/imgs/Logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={Logo} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Palmeira dos Índios</strong>
          <span>Alagoas</span>
        </div>
        <a href="#/" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
