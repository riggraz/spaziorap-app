import {connect} from 'react-redux';

import LogoutButtonP from '../components/ProfileScreen/LogoutButtonP';

import {logout} from '../actions/logout';

const mapDispatchToProps = dispatch =>
  ({
    handleLogout() {
      dispatch(logout());
    },
  });

const LogoutButton = connect(
  null,
  mapDispatchToProps
)(LogoutButtonP);

export default LogoutButton;