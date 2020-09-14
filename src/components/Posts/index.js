// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './posts.scss';
import Post from 'src/components/Posts/Post';

// == Composant
const Posts = ({ postList, categoryLabel }) => (
  <main className="main">
    <h1 className="main__title">
      {(categoryLabel === 'o’clock' || categoryLabel === 'o\'clock') ? 'vue' : categoryLabel}
    </h1>

    <section className="main__article-section">
      {postList.map((post) => (
        <Link
          to={post.slug === 'oclock-une-vraie-bonne-ecole' ? 'vue-une-vraie-fausse-bonne-idee' : post.slug}
          key={post.id}
          className="main__article-section__link"
        >
          <Post key={post.id} {...post} />
        </Link>
      ))}
    </section>
  </main>
);

// props validation
Posts.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Posts;
