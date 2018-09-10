import React from 'react';

import HeaderButton from '../HeaderButton';
import RegistrationForm from '../../containers/RegistrationForm';

import {LOGIN} from '../../constants/navigation';

class RegistrationScreen extends React.Component {
  static navigationOptions = ({navigation}) => 
  ({
    title: 'Registrati',
    headerRight: <HeaderButton label='Hai già un account?' size='s' handlePress={() => navigation.navigate(LOGIN)} />,
  });

  render() {
    return (
      <RegistrationForm navigation={this.props.navigation} />
    );
  }
}

export default RegistrationScreen;