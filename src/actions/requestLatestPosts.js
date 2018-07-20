import {API_URL} from '../constants/API';

export const START_LATEST_POSTS_REQUEST = 'START_LATEST_POSTS_REQUEST';
const startLatestPostsRequest = () =>
  ({
    type: START_LATEST_POSTS_REQUEST,
  });

export const LATEST_POSTS_REQUEST_SUCCESSFUL = 'LATEST_POSTS_REQUEST_SUCCESSFUL';
const latestPostsRequestSuccessful = json =>
  ({
    type: LATEST_POSTS_REQUEST_SUCCESSFUL,
    posts: json,
  });

export const LATEST_POSTS_REQUEST_FAILURE = 'LATEST_POSTS_REQUEST_FAILURE';
const latestPostsRequestFailure = () =>
  ({
    type: LATEST_POSTS_REQUEST_FAILURE,
  });

export const fetchLatestPosts = () => dispatch => {
  dispatch(startLatestPostsRequest());

  return fetch(`${API_URL}/posts/latest`)
    .then(
      response => response.json(),
      error => latestPostsRequestFailure(),
    )
    .then(
      json => dispatch(latestPostsRequestSuccessful(json.data)),
      error => console.log('An error occurred in fetchLatestPosts: ' + error),
    );
}