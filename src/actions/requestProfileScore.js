import {API_URL} from '../constants/API';

export const START_PROFILE_SCORE_REQUEST = 'START_PROFILE_SCORE_REQUEST';
const startProfileScoreRequest = userId =>
  ({
    type: START_PROFILE_SCORE_REQUEST,
    userId,
  });

export const PROFILE_SCORE_REQUEST_SUCCESSFUL = 'PROFILE_SCORE_REQUEST_SUCCESSFUL';
const profileScoreRequestSuccessful = (score, userId) =>
  ({
    type: PROFILE_SCORE_REQUEST_SUCCESSFUL,
    score,
    userId,
  });

export const PROFILE_SCORE_REQUEST_FAILURE = 'PROFILE_SCORE_REQUEST_FAILURE';
const profileScoreRequestFailure = userId =>
  ({
    type: PROFILE_SCORE_REQUEST_FAILURE,
    userId,
  });

export const fetchProfileScore = userId => dispatch => {
  dispatch(startProfileScoreRequest(userId));

  return fetch(`${API_URL}/users/${userId}/score`)
    .then(
      response => response.json(),
      error => profileScoreRequestFailure(userId),
    )
    .then(
      json => dispatch(profileScoreRequestSuccessful(json, userId)),
      error => console.log('An error occurred in FETCHPROFILESCORE: ' + error),
    );
}