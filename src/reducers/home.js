import {
  START_LATEST_SONGS_REQUEST,
  LATEST_SONGS_REQUEST_SUCCESSFUL,
  LATEST_SONGS_REQUEST_FAILURE,
} from '../actions/requestLatestSongs';

import latestSongs from './latestSongs';

const home = (
  state = {
    latestSongs: {},
  },
  action,
) => {
  switch (action.type) {
    case START_LATEST_SONGS_REQUEST:
    case LATEST_SONGS_REQUEST_SUCCESSFUL:
    case LATEST_SONGS_REQUEST_FAILURE:
      return {
        ...state,
        latestSongs: latestSongs(state.latestSongs, action),
      };

    default:
      return state;
  }
}

export default home;