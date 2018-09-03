import React from 'react';

import BackButton from '../Header/BackButton';
import LoginForm from '../../containers/LoginForm';

import {HOME} from '../../constants/navigation';

class LoginScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: 'Accedi',
    headerLeft: <BackButton handlePress={() => navigation.navigate(HOME)} />,
  });

  render() {
    return (
      <LoginForm navigation={this.props.navigation} />
    );
  }
}

export default LoginScreen;