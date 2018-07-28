import {connect} from 'react-redux';

import ProfileInfoP from '../components/ProfileScreen/ProfileInfoP';

const mapStateToProps = (state, ownProps) =>
  ({
    username: ownProps.profileName ? ownProps.profileName : state.user.username,
  });

const ProfileInfo = connect(
  mapStateToProps,
  null
)(ProfileInfoP);

export default ProfileInfo;