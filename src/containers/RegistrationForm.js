import {connect} from 'react-redux';

import {register} from '../actions/register';

import RegistrationFormP from '../components/RegistrationScreen/RegistrationFormP';

const mapStateToProps = state =>
  ({
    isLoggingIn: state.user.isLoggingIn,
    isLoggedIn: state.user.isLoggedIn,
    error: state.user.error,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleRegistration(username, email, password) {
      dispatch(register(username, email, password));
    }
  });

const RegistrationForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationFormP);

export default RegistrationForm;