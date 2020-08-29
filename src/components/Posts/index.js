// == Import npm
import React from 'react';

// == Import
import './posts.scss';

// == Composant
const Posts = () => (
  <main className="main">
    <h1 className="main__title">dev of thrones</h1>

    <section className="main__article-section">
      <article className="main__article-section__article">
        <h2 className="main__article-section__article__title">titre</h2>
        <span className="main__article-section__article__category">catégorie</span>
        <p className="main__article-section__article__content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel officiis dignissimos unde quas laboriosam et!
        </p>
      </article>

      <article className="main__article-section__article">
        <h2 className="main__article-section__article__title">titre</h2>
        <span className="main__article-section__article__category">catégorie</span>
        <p className="main__article-section__article__content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel officiis dignissimos unde quas laboriosam et!
        </p>
      </article>

      <article className="main__article-section__article">
        <h2 className="main__article-section__article__title">titre</h2>
        <span className="main__article-section__article__category">catégorie</span>
        <p className="main__article-section__article__content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel officiis dignissimos unde quas laboriosam et!
        </p>
      </article>
    </section>
  </main>
);

// == Export
export default Posts;
