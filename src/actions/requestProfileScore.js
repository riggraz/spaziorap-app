import {API_URL} from '../constants/API';

export const START_PROFILE_SCORE_REQUEST = 'START_PROFILE_SCORE_REQUEST';
const startProfileScoreRequest = () =>
  ({
    type: START_PROFILE_SCORE_REQUEST,
  });

export const PROFILE_SCORE_REQUEST_SUCCESSFUL = 'PROFILE_SCORE_REQUEST_SUCCESSFUL';
const profileScoreRequestSuccessful = score =>
  ({
    type: PROFILE_SCORE_REQUEST_SUCCESSFUL,
    score,
  });

export const PROFILE_SCORE_REQUEST_FAILURE = 'PROFILE_SCORE_REQUEST_FAILURE';
const profileScoreRequestFailure = () =>
  ({
    type: PROFILE_SCORE_REQUEST_FAILURE,
  });

export const fetchProfileScore = userId => dispatch => {
  dispatch(startProfileScoreRequest());

  return fetch(`${API_URL}/users/${userId}/score`)
    .then(
      response => response.json(),
      error => profileScoreRequestFailure(),
    )
    .then(
      json => dispatch(profileScoreRequestSuccessful(json)),
      error => console.log('An error occurred in FETCHPROFILESCORE: ' + error),
    );
}