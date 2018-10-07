import {API_URL} from '../constants/API';

export const START_POST_REQUEST = 'START_POST_REQUEST';
const startPostRequest = () =>
  ({
    type: START_POST_REQUEST,
  });

export const POST_REQUEST_SUCCESSFUL = 'POST_REQUEST_SUCCESSFUL';
const postRequestSuccessful = post =>
  ({
    type: POST_REQUEST_SUCCESSFUL,
    post,
  });

export const POST_REQUEST_FAILURE = 'POST_REQUEST_FAILURE';
const postRequestFailure = () =>
  ({
    type: POST_REQUEST_FAILURE,
  });

export const fetchPost = postId => dispatch => {
  dispatch(startPostRequest());

  return fetch(`${API_URL}/posts/${postId}`)
    .then(
      response => response.json(),
      error => postRequestFailure(),
    )
    .then(
      json => dispatch(postRequestSuccessful(json.data)),
      error => console.log('An error occurred in FETCHPOST: ' + error),
    );
}