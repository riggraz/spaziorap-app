import {API_URL} from '../constants/API';

import {fetchProfilePosts} from '../actions/requestProfilePosts';

export const START_LOGIN = 'START_LOGIN';
const startLogin = () =>
  ({
    type: START_LOGIN,
  });

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
const loginSuccessful = json =>
  ({
    type: LOGIN_SUCCESSFUL,
    user: json,
  });

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
const loginFailure = () =>
  ({
    type: LOGIN_FAILURE,
  });

export const login = (username, password) => dispatch => {
  dispatch(startLogin());

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  const body = {
    username,
    password
  };

  return fetch(`${API_URL}/login`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred: ' + error)
      )
      .then(
        json => {
          if (json.error === undefined) {
            dispatch(loginSuccessful(json.data));
            dispatch(fetchProfilePosts(json.data.id));

          } else {
            dispatch(loginFailure());
          }
        },
        () => dispatch(loginFailure())
      );
}