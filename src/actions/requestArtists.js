import {API_URL} from '../constants/API';

export const START_ARTISTS_REQUEST = 'START_ARTISTS_REQUEST';
const startArtistsRequest = () =>
  ({
    type: START_ARTISTS_REQUEST,
  });

export const ARTISTS_REQUEST_SUCCESSFUL = 'ARTISTS_REQUEST_SUCCESSFUL';
const artistsRequestSuccessful = artists =>
  ({
    type: ARTISTS_REQUEST_SUCCESSFUL,
    artists,
  });

export const ARTISTS_REQUEST_FAILURE = 'ARTISTS_REQUEST_FAILURE';
const artistsRequestFailure = () =>
  ({
    type: ARTISTS_REQUEST_FAILURE,
  });

export const fetchArtists = () => dispatch => {
  dispatch(startArtistsRequest());

  return fetch(`${API_URL}/artists`)
    .then(
      response => response.json(),
      error => dispatch(artistsRequestFailure()),
    )
    .then(
      json => dispatch(artistsRequestSuccessful(json.data)),
      error => console.log('An error occurred in fetchArtists: ' + error),
    );
}