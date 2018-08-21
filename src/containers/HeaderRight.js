import {connect} from 'react-redux';

import HeaderRightP from '../components/PostsScreen/HeaderRight';

import {fetchProfilePosts} from '../actions/requestProfilePosts';
import {fetchProfileScore} from '../actions/requestProfileScore';

const mapStateToProps = state =>
  ({
    userId: state.user.id,
    username: state.user.username,
    score: state.user.score,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleProfileRefresh(userId) {
      dispatch(fetchProfilePosts(userId));
    },
  });

const HeaderRight = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderRightP);

export default HeaderRight;