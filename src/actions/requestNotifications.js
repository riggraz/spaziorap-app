import {API_URL} from '../constants/API';

export const START_NOTIFICATIONS_REQUEST = 'START_NOTIFICATIONS_REQUEST';
const startNotificationsRequest = () =>
  ({
    type: START_NOTIFICATIONS_REQUEST,
  });

export const NOTIFICATIONS_REQUEST_SUCCESSFUL = 'NOTIFICATIONS_REQUEST_SUCCESSFUL';
const notificationsRequestSuccessful = notifications =>
  ({
    type: NOTIFICATIONS_REQUEST_SUCCESSFUL,
    notifications,
  });

export const NOTIFICATIONS_REQUEST_FAILURE = 'NOTIFICATIONS_REQUEST_FAILURE';
const notificationsRequestFailure = () =>
  ({
    type: NOTIFICATIONS_REQUEST_FAILURE,
  });

export const fetchNotifications = userId => dispatch => {
  dispatch(startNotificationsRequest());

  return fetch(`${API_URL}/users/${userId}/notifications`)
    .then(
      response => response.json(),
      error => notificationsRequestFailure(),
    )
    .then(
      json => dispatch(notificationsRequestSuccessful(json.data)),
      error => console.log('An error occurred in FETCHNOTIFICATIONS: ' + error),
    );
}