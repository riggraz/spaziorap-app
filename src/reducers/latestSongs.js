import {
  START_LATEST_SONGS_REQUEST,
  LATEST_SONGS_REQUEST_SUCCESSFUL,
  LATEST_SONGS_REQUEST_FAILURE,
} from '../actions/requestLatestSongs';

const latestSongs = (
  state = {
    areFetching: true,
    error: false,
    items: [],
  },
  action,
) => {
  switch (action.type) {
    case START_LATEST_SONGS_REQUEST:
      return {
        ...state,
        areFetching: true,
        error: false,
      };

    case LATEST_SONGS_REQUEST_SUCCESSFUL:
      return {
        areFetching: false,
        error: false,
        items: action.songs.map(song => ({
          id: song.id,
          name: song.attributes.name,
          artist: song.attributes.artist_name,
          foreign: song.attributes.foreign,
          url: song.attributes.url,
        })),
      };

    case LATEST_SONGS_REQUEST_FAILURE:
      return {
        ...state,
        areFetching: false,
        error: true,
      };

    default:
      return state;
  }
}

export default latestSongs;