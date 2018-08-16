import {connect} from 'react-redux';

import PlayerP from '../components/Player/index';

const mapStateToProps = state =>
  ({
    videoId: state.player.videoId,
    visible: state.player.visible,
  });

const Player = connect(
  mapStateToProps,
  null,
)(PlayerP);

export default Player;