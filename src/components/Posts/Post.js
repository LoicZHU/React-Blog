// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Post = ({ title, category, excerpt }) => {
  console.log('lol');

  return (
    <article className="main__article-section__article">
      <h2 className="main__article-section__article__title">
        {title === 'O’clock, une vraie bonne école ?' ? 'vue, une vraie fausse bonne idée ?' : title}
      </h2>
      <span className="main__article-section__article__category">
        {category === ('O’clock' || 'O\'clock') ? 'vue' : category}
      </span>
      <p className="main__article-section__article__content">
        {excerpt}
      </p>
    </article>
  );
};

// props validation
Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

// == Export
export default Post;
