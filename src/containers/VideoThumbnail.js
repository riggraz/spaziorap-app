import {connect} from 'react-redux';

import VideoThumbnailP from '../components/PostsScreen/VideoThumbnailP';

import {
  setVideoId,
  openPlayer,
} from '../actions/player';

const mapDispatchToProps = dispatch =>
  ({
    handlePlayVideo(videoId) {
      dispatch(setVideoId(videoId));
      dispatch(openPlayer());
    },
  });

const VideoThumbnail = connect(
  null,
  mapDispatchToProps
)(VideoThumbnailP);

export default VideoThumbnail;