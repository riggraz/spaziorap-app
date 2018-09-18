import React from 'react';

import BackButton from '../Header/BackButton';
import HeaderButton from '../HeaderButton';
import LoginForm from '../../containers/LoginForm';

import {HOME, REGISTRATION} from '../../constants/navigation';

class LoginScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: 'accedi',
    headerLeft: <BackButton handlePress={() => navigation.navigate(HOME)} />,
    headerRight: <HeaderButton label='non hai un account?' size='s' handlePress={() => navigation.navigate(REGISTRATION)} />,
  });

  render() {
    return (
      <LoginForm navigation={this.props.navigation} />
    );
  }
}

export default LoginScreen;