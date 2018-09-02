export const SET_VIDEO_ID = 'SET_VIDEO_ID';
export const setVideoId = videoId =>
  ({
    type: SET_VIDEO_ID,
    videoId,
  });

export const OPEN_PLAYER = 'OPEN_PLAYER';
export const openPlayer = () =>
  ({
    type: OPEN_PLAYER,
  });

export const CLOSE_PLAYER = 'CLOSE_PLAYER';
export const closePlayer = () =>
  ({
    type: CLOSE_PLAYER,
  });