import React from 'react';

import LoginForm from '../../containers/LoginForm';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: '👤 Accedi',
  };

  render() {
    return (
      <LoginForm navigation={this.props.navigation} />
    );
  }
}

export default LoginScreen;