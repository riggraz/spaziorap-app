export const SET_VIDEO_ID = 'SET_VIDEO_ID';
export const setVideoId = videoId =>
  ({
    type: SET_VIDEO_ID,
    videoId,
  });

export const SHOW = 'SHOW';
export const show = () =>
  ({
    type: SHOW,
  });

export const HIDE = 'HIDE';
export const hide = () =>
  ({
    type: HIDE,
  });