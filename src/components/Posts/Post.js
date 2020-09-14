// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

// purify HTML
const createMarkup = (htmlCode) => {
  return {
    __html: DOMPurify.sanitize(htmlCode)
  };
};

// == Composant
const Post = ({ title, category, excerpt }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="main__article-section__link__article">
      <h2 className="main__article-section__link__article__title">
        {title === 'O’clock, une vraie bonne école ?' ? 'vue, une vraie fausse bonne idée ?' : title}
      </h2>
      <span className="main__article-section__link__article__category">
        {category === ('O’clock' || 'O\'clock') ? 'vue' : category}
      </span>
      <p className="main__article-section__link__article__content"
        dangerouslySetInnerHTML={createMarkup(excerpt)}
      />
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
