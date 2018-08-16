import {connect} from 'react-redux';

import VideoThumbnailP from '../components/PostsScreen/VideoThumbnailP';

import {
  setVideoId,
  show,
} from '../actions/player';

const mapDispatchToProps = dispatch =>
  ({
    handlePlayVideo(videoId) {
      dispatch(setVideoId(videoId));
      dispatch(show());
    }
  });

const VideoThumbnail = connect(
  null,
  mapDispatchToProps
)(VideoThumbnailP);

export default VideoThumbnail;