import {connect} from 'react-redux';

import PlayerP from '../components/Player/index';

import {hide} from '../actions/player';

const mapStateToProps = state =>
  ({
    videoId: state.player.videoId,
    visible: state.player.visible,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleHide() {
      dispatch(hide());
    },
  });

const Player = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerP);

export default Player;