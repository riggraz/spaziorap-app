import {API_URL} from '../constants/API';

export const START_POSTS_REQUEST = 'START_POSTS_REQUEST';
const startPostsRequest = () =>
  ({
    type: START_POSTS_REQUEST,
  });

export const POSTS_REQUEST_SUCCESSFUL = 'POSTS_REQUEST_SUCCESSFUL';
const postsRequestSuccessful = json =>
  ({
    type: POSTS_REQUEST_SUCCESSFUL,
    posts: json,
  });

export const POSTS_REQUEST_FAILURE = 'POSTS_REQUEST_FAILURE';
const postsRequestFailure = () =>
  ({
    type: POSTS_REQUEST_FAILURE,
  });

export const fetchPosts = topic => dispatch => {
  dispatch(startPostsRequest());

  return fetch(`${API_URL}/topics/${topic}/posts`)
    .then(
      response => response.json(),
      error => postsRequestFailure(),
    )
    .then(
      json => dispatch(postsRequestSuccessful(json.data)),
      error => console.log('An error occurred in FETCHPOSTS: ' + error),
    );
}