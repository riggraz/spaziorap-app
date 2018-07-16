import {connect} from 'react-redux';

import UserInfoP from '../components/PostsScreen/UserInfoP';

const mapStateToProps = state =>
  ({
    username: state.user.username,
  });

const UserInfo = connect(
  mapStateToProps,
  null
)(UserInfoP);

export default UserInfo;