/* eslint-disable no-use-before-define */
// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// == Import
import './app.scss';
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

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
        console.log(response.data);
        setCategoryList(response.data);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        setFetchingCategoryList(false);
      });
  };
console.log(categoryList);
  return (
    <div className="app">
      {!fetchingCategoryList && <Header categoryList={categoryList} />}
      {!fetchingPostList && <Posts postList={postList} />}
      <Footer />
    </div>
  );
};

// == Export
export default App;
