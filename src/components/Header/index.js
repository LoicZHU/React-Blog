// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './header.scss';

// == Composant
const Header = ({ categoryList }) => (
  <header className="header">
    <nav>
      <ul className="header__navlist">
        {categoryList.map((category) => (
          <li key={category.label}>
            <NavLink
              exact
              to={(category.route === '/oclock') ? '/vue' : category.route}
              className="header__navlist__link"
              activeClassName="header__navlist__link--active"
            >
              {category.label === ('O’clock' || 'O\'clock') ? 'Vue' : category.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

// == Export
export default Header;
