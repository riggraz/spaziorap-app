import {API_URL} from '../constants/API';

export const START_REGISTRATION = 'START_REGISTRATION';
const startRegistration = () =>
  ({
    type: START_REGISTRATION,
  });

export const REGISTRATION_SUCCESSFUL = 'REGISTRATION_SUCCESSFUL';
const registrationSuccessful = json =>
  ({
    type: REGISTRATION_SUCCESSFUL,
    user: json,
  });

export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
const registrationFailure = () =>
  ({
    type: REGISTRATION_FAILURE,
  });

export const register = (username, email, password) => dispatch => {
  dispatch(startRegistration());

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  const body = {
    user: {
      username,
      email,
      password,
    },
  };

  return fetch(`${API_URL}/users`,
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
            dispatch(registrationSuccessful(json.data));
          } else {
            dispatch(registrationFailure());
          }
        },
        () => dispatch(registrationFailure())
      );
}