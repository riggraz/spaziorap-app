import {connect} from 'react-redux';

import HeaderRightP from '../components/PostsScreen/HeaderRight';

import {fetchPosts} from '../actions/requestPosts';
import {selectTopic} from '../actions/selectTopic';

const mapStateToProps = state =>
  ({
    //UserInfo
    username: state.user.username,
  });

const HeaderRight = connect(
  mapStateToProps,
  null
)(HeaderRightP);

export default HeaderRight;