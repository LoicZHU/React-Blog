// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
