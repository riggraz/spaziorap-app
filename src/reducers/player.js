import {
  SET_VIDEO_ID,
  SHOW,
  HIDE,
} from '../actions/player';

const player = (
  state = {
    videoId: '',
    visible: false,
  },
  action
) => {
  switch (action.type) {
    case SET_VIDEO_ID:
      return {
        ...state,
        videoId: action.videoId,
      };

    case SHOW:
      return {
        ...state,
        visible: true,
      };

    case HIDE:
      return {
        ...state,
        visible: false,
      };

    default:
      return state;
  }
};

export default player;