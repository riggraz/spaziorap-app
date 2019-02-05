import {API_URL} from '../constants/API';

import {fetchProfilePosts} from '../actions/requestProfilePosts';
import {fetchNotifications} from './requestNotifications';

import {saveValueByKey} from '../config/localStorage';

import pushNotificationToken from '../config/pushNotificationToken';

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
            saveValueByKey('accessToken', json.data.attributes.access_token);
            dispatch(fetchNotifications(json.data.id));
            pushNotificationToken(json.data.attributes.username);
          } else {
            dispatch(loginFailure());
          }
        },
        () => dispatch(loginFailure())
      );
}