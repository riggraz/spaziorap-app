import {API_URL} from '../constants/API';

import {deleteValueByKey} from "../config/localStorage";

export const START_VERIFY_ACCESS_TOKEN = 'START_VERIFY_ACCESS_TOKEN';
const startVerifyAccessToken = () =>
  ({
    type: START_VERIFY_ACCESS_TOKEN,
  });

export const VERIFY_ACCESS_TOKEN_SUCCESSFUL = 'VERIFY_ACCESS_TOKEN_SUCCESSFUL';
const verifyAccessTokenSuccessful = user =>
  ({
    type: VERIFY_ACCESS_TOKEN_SUCCESSFUL,
    user,
  });

export const VERIFY_ACCESS_TOKEN_GENERIC_FAILURE = 'VERIFY_ACCESS_TOKEN_GENERIC_FAILURE';
const verifyAccessTokenGenericFailure = () =>
  ({
    type: VERIFY_ACCESS_TOKEN_GENERIC_FAILURE,
  });

export const VERIFY_ACCESS_TOKEN_UNAUTHORIZED_FAILURE = 'VERIFY_ACCESS_TOKEN_UNAUTHORIZED_FAILURE';
const verifyAccessTokenUnauthorizedFailure = () =>
  ({
    type: VERIFY_ACCESS_TOKEN_UNAUTHORIZED_FAILURE,
  });

export const verifyAccessToken = accessToken => dispatch => {
  dispatch(startVerifyAccessToken());

  const userId = accessToken.split(':')[0];
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: accessToken,
  };

  return fetch(`${API_URL}/users/${userId}/verify_access_token`,
      {
        method: 'GET',
        headers,
      })
        .then(
          response => response.json(),
          error => console.log('An error occurred: ' + error)
        )
        .then(
          json => {
            if (!json.error) {
              //accessToken is correct
              dispatch(verifyAccessTokenSuccessful(json.data));
            } else {
              //accessToken is not correct (unauthorized error)
              dispatch(verifyAccessTokenUnauthorizedFailure());
              deleteValueByKey('accessToken');
            }
          },
          () => dispatch(verifyAccessTokenGenericFailure()),
        );
}