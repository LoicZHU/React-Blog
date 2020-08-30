/* eslint-disable import/prefer-default-export */

/**
 * @param {array} postList All posts
 * @param {string} categoryLabel A category name
 * @return Posts array of a given category
 */
export const getPostsByCategory = (postList, categoryLabel) => (
  postList.filter((post) => (
    post.category === categoryLabel
  ))
);
