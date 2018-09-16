import {API_URL} from '../constants/API';

export const START_POSTS_REQUEST = 'START_POSTS_REQUEST';
const startPostsRequest = page =>
  ({
    type: START_POSTS_REQUEST,
    page,
  });

export const POSTS_REQUEST_SUCCESSFUL = 'POSTS_REQUEST_SUCCESSFUL';
const postsRequestSuccessful = (posts, page) =>
  ({
    type: POSTS_REQUEST_SUCCESSFUL,
    posts,
    page,
  });

export const POSTS_REQUEST_FAILURE = 'POSTS_REQUEST_FAILURE';
const postsRequestFailure = () =>
  ({
    type: POSTS_REQUEST_FAILURE,
  });

export const fetchPosts = (topic, page=1) => dispatch => {
  dispatch(startPostsRequest(page));

  return fetch(`${API_URL}/topics/${topic}/posts?page=${page}`)
    .then(
      response => response.json(),
      error => postsRequestFailure(),
    )
    .then(
      json => dispatch(postsRequestSuccessful(json.data, page)),
      error => console.log('An error occurred in FETCHPOSTS: ' + error),
    );
}