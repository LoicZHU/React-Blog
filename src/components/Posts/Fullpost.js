// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Fullpost = ({ title, category, content }) => (
  <main className="main">
    <h1 className="main__title">dev of thrones</h1>

    <section className="main__article-section">
      <article className="main__article-section__article">
        <h2 className="main__article-section__article__title">
          {title === 'O’clock, une vraie bonne école ?' ? 'vue, une vraie fausse bonne idée ?' : title}
        </h2>
        <span className="main__article-section__article__category">
          {category === ('O’clock' || 'O\'clock') ? 'vue' : category}
        </span>
        <p className="main__article-section__article__content">
          {new RegExp('^(O\'clock)|(O’clock)').test(content) ? content.replace(new RegExp('(O\'clock|O’clock).+(une vraie bonne école \\? )'), 'Vue, une vraie fausse bonne idée ? ') : content}
        </p>
      </article>
    </section>
  </main>
);

// props validation
Fullpost.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

// == Export
export default Fullpost;
