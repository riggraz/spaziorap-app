import {API_URL} from '../constants/API';

export const LIKE_SUCCESSFUL_POST = 'LIKE_SUCCESSFUL_POST';
const likeSuccessfulPost = (postId, score, pressedButton) =>
  ({
    type: LIKE_SUCCESSFUL_POST,
    postId,
    score,
    pressedButton,
  });

export const LIKE_SUCCESSFUL_COMMENT = 'LIKE_SUCCESSFUL_COMMENT';
const likeSuccessfulComment = (commentId, score, pressedButton) =>
  ({
    type: LIKE_SUCCESSFUL_COMMENT,
    commentId,
    score,
    pressedButton,
  });

export const like = (type, id, score, accessToken) => dispatch => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: accessToken,
  }
  const body = {
    score
  };

  return fetch(`${API_URL}/${type === 'post' ? 'posts' : 'comments' }/${id}/likes`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred: ' + error)
      )
      .then(
        json => {
          if (json.error === undefined) {
            switch (type) {
              case 'post':
              default:
                dispatch(likeSuccessfulPost(json.data.attributes.post_id, json.data.attributes.score, score));

              case 'comment':
                dispatch(likeSuccessfulComment(json.data.attributes.comment_id, json.data.attributes.score, score));
            }
          } else {
            console.log('You need to log in');
          }
        },
        error => console.log('An error occurred: ' + error)
      );
}