// == Import npm
import React from 'react';

// == Import
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">
    <nav>
      <ul className="header__navlist">
        <li>
          <a href="">accueil</a>
        </li>
        <li>
          <a href="">angular</a>
        </li>
        <li>
          <a href="">react</a>
        </li>
        <li>
          <a href="">vue</a>
        </li>
        <li>
          <a href="">autre</a>
        </li>
      </ul>
    </nav>
  </header>
);

// == Export
export default Header;
