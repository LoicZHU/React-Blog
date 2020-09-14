// == Import npm
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';

// == Import
import './header.scss';

// == Composant
const Header = ({ categoryList }) => (
  <header className="header">
    <div class="header__logo">
      <Link to="/">Dév web</Link>
    </div>

    <nav class="header__nav">
      <ul className="header__nav__list">
        {categoryList.map((category) => (
          <li key={category.label}>
            <NavLink
              exact
              to={(category.route === '/oclock') ? '/vue' : category.route}
              className="header__nav__list__link"
              activeClassName="header__nav__list__link--active"
            >
              {category.label === ('O’clock' || 'O\'clock') ? 'Vue' : category.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

    <Menu right width={ '150px' }>
      <ul className="header__nav__list">
        {categoryList.map((category) => (
          <li key={category.label}>
            <NavLink
              exact
              to={(category.route === '/oclock') ? '/vue' : category.route}
              className="header__nav__list__link"
              activeClassName="header__nav__list__link--active"
            >
              {category.label === ('O’clock' || 'O\'clock') ? 'Vue' : category.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </Menu>
  </header>
);

// props validation
Header.propTypes = {
  categoryList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Header;
