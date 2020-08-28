// == Import npm
import React from 'react';

// == Import
import './app.scss';
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Posts />
    <Footer />
  </div>
);

// == Export
export default App;
