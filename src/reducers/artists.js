import {
  START_ARTISTS_REQUEST,
  ARTISTS_REQUEST_SUCCESSFUL,
  ARTISTS_REQUEST_FAILURE,
} from '../actions/requestArtists';

const artists = (
  state = {
    areFetching: true,
    error: false,
    items: [],
  },
  action,
) => {
  switch (action.type) {
    case START_ARTISTS_REQUEST:
      return {
        ...state,
        areFetching: true,
        error: false,
      };

    case ARTISTS_REQUEST_SUCCESSFUL:
      return {
        areFetching: false,
        error: false,
        items: action.artists.map(artist => ({
          id: artist.id,
          name: artist.attributes.name,
          foreign: artist.attributes.foreign,
        })),
      };

    case ARTISTS_REQUEST_FAILURE:
      return {
        ...state,
        areFetching: false,
        error: true,
      };

    default:
      return state;
  }
}

export default artists;