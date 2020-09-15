/* eslint-disable no-use-before-define */
// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

// == Import
import './app.scss';
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Fullpost from 'src/components/Posts/Fullpost';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import { getPostsByCategory } from 'src/components/utils/selectors';

// == Composant
const App = () => {
  // componentDidMount
  useEffect(() => {
    fetchPosts(); // fetch posts
    fetchCategories(); // fetch routes
  }, []);

  // state
  const [postList, setPostList] = useState([]);
  const [fetchingPostList, setFetchingPostList] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [fetchingCategoryList, setFetchingCategoryList] = useState(true);

  // fetch
  const fetchPosts = () => {
    axios({
      method: 'GET',
      url: 'https://oclock-open-apis.now.sh/api/blog/posts',
    })
      .then((response) => {
        // console.log(response.data);
        setPostList(response.data);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        setFetchingPostList(false);
      });
  };

  const fetchCategories = () => {
    axios({
      method: 'GET',
      url: 'https://oclock-open-apis.now.sh/api/blog/categories',
    })
      .then((response) => {
        // console.log(response.data);
        setCategoryList(response.data);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        setFetchingCategoryList(false);
      });
  };

  return (
    <div className="app">
      {/* header */}
      {!fetchingCategoryList && <Header categoryList={categoryList} />}

      {/* content */}
      <Switch>
        {/* home page */}
        <Route exact path="/">
          {!fetchingPostList && <Posts postList={postList} categoryLabel={'Articles'} />}
        </Route>

        {/* all categories page */}
        {!fetchingPostList
          && !fetchingCategoryList
          && (categoryList.map((category) => (
            <Route
              exact
              path={(category.route === '/oclock') ? '/vue' : category.route}
              key={(category.label === 'O’clock' || category.label === 'O\'clock') ? 'Vue' : category.label}
            >
              <Posts
                postList={getPostsByCategory(postList, category.label)}
                categoryLabel={(category.label === 'O’clock' || category.label === 'O\'clock') ? 'Vue' : category.label} />
            </Route>
          )))
        }

        {/* all fullposts of each category */}
        {!fetchingPostList
          && (postList.map((post) => (
            <Route
              exact
              path={post.slug === 'oclock-une-vraie-bonne-ecole' ? '/vue-une-vraie-fausse-bonne-idee' : `/${post.slug}`}
              key={post.id}
            >
              <Fullpost title={post.title} category={post.category} content={post.content} />
            </Route>
          )))
        }

        {/* 404 page */}
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>

      {/* footer */}
      <Footer />
    </div>
  );
};

// == Export
export default App;
