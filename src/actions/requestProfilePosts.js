import {API_URL} from '../constants/API';
import {fetchProfileScore} from './requestProfileScore';

export const START_PROFILE_POSTS_REQUEST = 'START_PROFILE_POSTS_REQUEST';
const startProfilePostsRequest = page =>
  ({
    type: START_PROFILE_POSTS_REQUEST,
    page,
  });

export const PROFILE_POSTS_REQUEST_SUCCESSFUL = 'PROFILE_POSTS_REQUEST_SUCCESSFUL';
const profilePostsRequestSuccessful = (posts, page) =>
  ({
    type: PROFILE_POSTS_REQUEST_SUCCESSFUL,
    posts,
    page,
  });

export const PROFILE_POSTS_REQUEST_FAILURE = 'PROFILE_POSTS_REQUEST_FAILURE';
const profilePostsRequestFailure = () =>
  ({
    type: PROFILE_POSTS_REQUEST_FAILURE,
  });

export const fetchProfilePosts = (user, page=1) => dispatch => {
  dispatch(startProfilePostsRequest(page));
  
  if (page === 1) dispatch(fetchProfileScore(user));

  return fetch(`${API_URL}/users/${user}/posts?page=${page}`)
    .then(
      response => response.json(),
      error => profilePostsRequestFailure(),
    )
    .then(
      json => dispatch(profilePostsRequestSuccessful(json.data, page)),
      error => console.log('An error occurred in FETCHPROFILEPOSTS: ' + error),
    );
}