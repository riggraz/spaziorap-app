import {connect} from 'react-redux';

import ProfileP from '../components/ProfileScreen/ProfileP';

const mapStateToProps = (state, ownProps) =>
  ({
    username: ownProps.profileName ? ownProps.profileName : state.user.username,
    score: state.user.visitedProfileScore,
  });

const Profile = connect(
  mapStateToProps,
  null
)(ProfileP);

export default Profile;