// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './notfound.scss';

// == Composant
const NotFound = () => (
  <div className="notfound">
    <h1 className="notfound__title">Erreur 404</h1>

    <p className="notfound__content">Oups, nous n'avons pas pu trouvé la ressource demandée.</p>

    <Link to="/">
      &gt; Retourner à la page d'accueil &lt;
    </Link>
  </div>
);

// == Export
export default NotFound;
