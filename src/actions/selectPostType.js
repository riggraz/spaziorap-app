export const SELECT_POST_TYPE = 'SELECT_POST_TYPE';
export const selectPostType = postType =>
  ({
    type: SELECT_POST_TYPE,
    postType,
  });