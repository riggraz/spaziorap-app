import {API_URL} from '../constants/API';

export const START_LATEST_POSTS_REQUEST = 'START_LATEST_POSTS_REQUEST';
const startLatestPostsRequest = page =>
  ({
    type: START_LATEST_POSTS_REQUEST,
    page,
  });

export const LATEST_POSTS_REQUEST_SUCCESSFUL = 'LATEST_POSTS_REQUEST_SUCCESSFUL';
const latestPostsRequestSuccessful = (posts, page) =>
  ({
    type: LATEST_POSTS_REQUEST_SUCCESSFUL,
    posts,
    page,
  });

export const LATEST_POSTS_REQUEST_FAILURE = 'LATEST_POSTS_REQUEST_FAILURE';
const latestPostsRequestFailure = () =>
  ({
    type: LATEST_POSTS_REQUEST_FAILURE,
  });

export const fetchLatestPosts = (page=1) => dispatch => {
  dispatch(startLatestPostsRequest(page));

  return fetch(`${API_URL}/posts/latest?page=${page}`)
    .then(
      response => response.json(),
      error => latestPostsRequestFailure(),
    )
    .then(
      json => dispatch(latestPostsRequestSuccessful(json.data, page)),
      error => console.log('An error occurred in fetchLatestPosts: ' + error),
    );
}