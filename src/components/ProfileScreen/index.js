import React from 'react';
import {Text} from 'react-native';

import Profile from '../../containers/Profile';
import LogoutButton from '../../containers/LogoutButton';

class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: navigation.getParam('profileName') ?
      ('profilo di ' + navigation.getParam('profileName'))
      :
      ('il tuo profilo'),

    headerRight: navigation.getParam('profileName') ?
      null
      :
      <LogoutButton navigation={navigation} />
  });

  render() {
    const {navigation} = this.props;

    return (
      <Profile
        profileName={navigation.getParam('profileName')}
        navigation={navigation}
      />
    );
  }
}

export default ProfileScreen;