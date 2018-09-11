import {StyleSheet} from 'react-native';

export const THUMBNAIL_WIDTH = 128;
export const THUMBNAIL_HEIGHT = 72;

const postVideoThumbnailStyles = StyleSheet.create({
  postVideoThumbnail: {
    flex: -1,
    alignSelf: 'center',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  postVideoThumbnailNormal: {
    width: THUMBNAIL_WIDTH,
    height: THUMBNAIL_HEIGHT,
  },

  postVideoThumbnailBig: {
    width: THUMBNAIL_WIDTH * 2,
    height: THUMBNAIL_HEIGHT * 2,
  },

  postVideoThumbnailImage: {
    width: THUMBNAIL_WIDTH,
    height: THUMBNAIL_HEIGHT,
  },

  postVideoThumbnailImageBig: {
    width: THUMBNAIL_WIDTH * 2,
    height: THUMBNAIL_HEIGHT * 2,
  },

  playArrow: {
    color: 'white',
    fontSize: 48,
    opacity: 0.8,

    position: 'absolute',
    alignSelf: 'center',
  },
});

export default postVideoThumbnailStyles;