import {connect} from 'react-redux';

import ProfileP from '../components/ProfileScreen/ProfileP';

const mapStateToProps = (state, ownProps) =>
  ({
    username: ownProps.profileName ? ownProps.profileName : state.user.username,
  });

const Profile = connect(
  mapStateToProps,
  null
)(ProfileP);

export default Profile;