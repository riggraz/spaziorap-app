import {Alert} from 'react-native';

import {API_URL} from '../constants/API';

export const deletePost = (postId, accessToken) => dispatch => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: accessToken,
  };

  return fetch(`${API_URL}/posts/${postId}`,
    {
      method: 'DELETE',
      headers,
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred in deletePost: ' + error),
      )
      .then(
        json => {
          if (json.error) Alert.alert('Errore', "Si è verificato un errore nell'eliminazione del post.");
          else Alert.alert('Post eliminato', 'Il post è stato eliminato con successo.');
        },
        () => null,
      );
}