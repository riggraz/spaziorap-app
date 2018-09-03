import {connect} from 'react-redux';

import LatestSongsP from '../components/HomeScreen/LatestSongs';

import {setVideoId, openPlayer} from '../actions/player';

const mapStateToProps = state =>
  ({
    songs: state.home.latestSongs.items,
    areFetching: state.home.latestSongs.areFetching,
  });

const mapDispatchToProps = dispatch =>
  ({
    handlePlaySong(videoId) {
      dispatch(setVideoId(videoId));
      dispatch(openPlayer());
    },
  });

const LatestSongs = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LatestSongsP);

export default LatestSongs;