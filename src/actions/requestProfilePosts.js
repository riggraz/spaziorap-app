import {API_URL} from '../constants/API';
import {fetchProfileScore} from './requestProfileScore';

export const START_PROFILE_POSTS_REQUEST = 'START_PROFILE_POSTS_REQUEST';
const startProfilePostsRequest = () =>
  ({
    type: START_PROFILE_POSTS_REQUEST,
  });

export const PROFILE_POSTS_REQUEST_SUCCESSFUL = 'PROFILE_POSTS_REQUEST_SUCCESSFUL';
const profilePostsRequestSuccessful = json =>
  ({
    type: PROFILE_POSTS_REQUEST_SUCCESSFUL,
    posts: json,
  });

export const PROFILE_POSTS_REQUEST_FAILURE = 'PROFILE_POSTS_REQUEST_FAILURE';
const profilePostsRequestFailure = () =>
  ({
    type: PROFILE_POSTS_REQUEST_FAILURE,
  });

export const fetchProfilePosts = user => dispatch => {
  dispatch(startProfilePostsRequest());
  dispatch(fetchProfileScore(user));

  return fetch(`${API_URL}/users/${user}/posts`)
    .then(
      response => response.json(),
      error => profilePostsRequestFailure(),
    )
    .then(
      json => dispatch(profilePostsRequestSuccessful(json.data)),
      error => console.log('An error occurred in FETCHPROFILEPOSTS: ' + error),
    );
}