import {API_URL} from '../constants/API';

export const LIKE_SUCCESSFUL = 'LIKE_SUCCESSFUL';
const likeSuccessful = (postId, score, pressedButton) =>
  ({
    type: LIKE_SUCCESSFUL,
    postId,
    score,
    pressedButton,
  });

export const like = (postId, score, accessToken) => dispatch => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: accessToken,
  }
  const body = {
    score
  };

  return fetch(`${API_URL}/posts/${postId}/likes`,
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
            dispatch(likeSuccessful(json.data.attributes.post_id, json.data.attributes.score, score));
          } else {
            console.log('You need to log in');
          }
        },
        error => console.log('An error occurred: ' + error)
      );
}