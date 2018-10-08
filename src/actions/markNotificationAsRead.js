import {API_URL} from '../constants/API';

export const NOTIFICATION_READ_SUCCESS = 'NOTIFICATION_READ_SUCCESS';
const notificationReadSuccess = notificationId =>
  ({
    type: NOTIFICATION_READ_SUCCESS,
    notificationId,
  });

export const markNotificationAsRead = (
  notificationId,
  accessToken,
) =>
  dispatch => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: accessToken,
    };
    const requestBody = {};
  
    return fetch(`${API_URL}/notifications/${notificationId}/mark_as_read`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody)
      })
        .then(
          response => dispatch(notificationReadSuccess(notificationId)),
          error => console.log('An error occurred: ' + error),
        );
  }