// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Import
import './posts.scss';
import Post from 'src/components/Posts/Post';

// == Composant
const Posts = ({ postList }) => (
  <main className="main">
    <h1 className="main__title">dev of thrones</h1>

    <section className="main__article-section">
      {postList.map((post) => (
        <Link
          exact
          to={post.slug}
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
