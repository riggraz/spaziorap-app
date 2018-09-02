import {
  SET_VIDEO_ID,
  OPEN_PLAYER,
  CLOSE_PLAYER,
} from '../actions/player';

const player = (
  state = {
    videoId: '',
    open: false,
  },
  action
) => {
  switch (action.type) {
    case SET_VIDEO_ID:
      return {
        ...state,
        videoId: action.videoId,
      };

    case OPEN_PLAYER:
      return {
        ...state,
        open: true,
      };

    case CLOSE_PLAYER:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
};

export default player;