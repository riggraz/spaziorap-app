import {API_URL} from '../constants/API';

export const START_LATEST_SONGS_REQUEST = 'START_LATEST_SONGS_REQUEST';
const startLatestSongsRequest = () =>
  ({
    type: START_LATEST_SONGS_REQUEST,
  });

export const LATEST_SONGS_REQUEST_SUCCESSFUL = 'LATEST_SONGS_REQUEST_SUCCESSFUL';
const latestSongsRequestSuccessful = songs =>
  ({
    type: LATEST_SONGS_REQUEST_SUCCESSFUL,
    songs,
  });

export const LATEST_SONGS_REQUEST_FAILURE = 'LATEST_SONGS_REQUEST_FAILURE';
const latestSongsRequestFailure = () =>
  ({
    type: LATEST_SONGS_REQUEST_FAILURE,
  });

export const fetchLatestSongs = () => dispatch => {
  dispatch(startLatestSongsRequest());

  return fetch(`${API_URL}/songs/latest`)
    .then(
      response => response.json(),
      error => latestSongsRequestFailure(),
    )
    .then(
      json => dispatch(latestSongsRequestSuccessful(json.data)),
      error => console.log('An error occurred in fetchLatestSongs: ' + error),
    );
}