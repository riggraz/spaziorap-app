import {connect} from 'react-redux';

import HeaderRightP from '../components/Header/HeaderRight';

import {fetchProfilePosts} from '../actions/requestProfilePosts';
import {fetchProfileScore} from '../actions/requestProfileScore';
import {fetchNotifications} from '../actions/requestNotifications';

const mapStateToProps = state =>
  ({
    userId: state.user.id,
    username: state.user.username,
    score: state.user.score,
    isLoggingIn: state.user.isLoggingIn,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleProfileRefresh(userId) {
      dispatch(fetchProfilePosts(userId));
      dispatch(fetchNotifications(userId));
    },
  });

const HeaderRight = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderRightP);

export default HeaderRight;