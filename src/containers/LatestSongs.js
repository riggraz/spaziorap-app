import {connect} from 'react-redux';

import LatestSongsP from '../components/HomeScreen/LatestSongs';

import {setVideoId, openPlayer} from '../actions/player';

const mapStateToProps = (state, ownProps) =>
  ({
    songs: !state.home.latestSongs.areFetching ? state.home.latestSongs.items.filter(song => song.foreign === ownProps.foreign) : [],
    areFetching: state.home.latestSongs.areFetching,
    artists: state.artists.items,
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