import {connect} from 'react-redux';

import LoginFormP from '../components/LoginScreen/LoginFormP';

import {login} from '../actions/login';

const mapStateToProps = state =>
  ({
    isLoggingIn: state.user.isLoggingIn,
    isLoggedIn: state.user.isLoggedIn,
    error: state.user.error,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleLogin(username, password) {
      dispatch(login(username, password));
    }
  });

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginFormP);

export default LoginForm;