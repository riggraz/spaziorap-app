import {API_URL} from '../constants/API';

export const START_COMMENTS_REQUEST = 'START_COMMENTS_REQUEST';
const startCommentsRequest = () =>
  ({
    type: START_COMMENTS_REQUEST,
  });

export const COMMENTS_REQUEST_SUCCESSFUL = 'COMMENTS_REQUEST_SUCCESSFUL';
const commentsRequestSuccessful = (comments, postId) =>
  ({
    type: COMMENTS_REQUEST_SUCCESSFUL,
    comments,
    postId,
  });

export const COMMENTS_REQUEST_FAILURE = 'COMMENTS_REQUEST_FAILURE';
const commentsRequestFailure = () =>
  ({
    type: COMMENTS_REQUEST_FAILURE,
  });

export const fetchComments = postId => dispatch => {
  dispatch(startCommentsRequest());

  return fetch(`${API_URL}/posts/${postId}/comments`)
    .then(
      response => response.json(),
      error => dispatch(commentsRequestFailure()),
    )
    .then(
      json => dispatch(commentsRequestSuccessful(json.data, postId)),
      error => console.log('An error occurred in fetchComments: ' + error),
    );
}