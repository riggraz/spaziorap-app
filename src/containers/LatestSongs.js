import {connect} from 'react-redux';

import LatestSongsP from '../components/HomeScreen/LatestSongsP';

import {setVideoId, show} from '../actions/player';

const mapStateToProps = state =>
  ({
    songs: state.home.latestSongs.items,
    areFetching: state.home.latestSongs.areFetching,
  });

const mapDispatchToProps = dispatch =>
  ({
    handlePlaySong(videoId) {
      dispatch(setVideoId(videoId));
      dispatch(show());
    },
  });

const LatestSongs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LatestSongsP);

export default LatestSongs;