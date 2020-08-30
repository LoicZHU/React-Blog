/* eslint-disable import/prefer-default-export */

/**
 * @param ll
 */
export const getPostsByCategory = (postList, categoryLabel) => (
  postList.filter((post) => (
    post.category === categoryLabel
  ))
);
