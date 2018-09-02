import {connect} from 'react-redux';

import PlayerP from '../components/Player/index';

import {closePlayer} from '../actions/player';

const mapStateToProps = state =>
  ({
    videoId: state.player.videoId,
    open: state.player.open,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleHide() {
      dispatch(closePlayer());
    },
  });

const Player = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerP);

export default Player;