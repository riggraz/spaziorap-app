import React from 'react';
import {Text} from 'react-native';

import ProfileInfo from '../../containers/ProfileInfo';
import LogoutButton from '../../containers/LogoutButton';

class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: navigation.getParam('profileName') ?
      ('Profilo di ' + navigation.getParam('profileName'))
      :
      ('Il tuo profilo'),

    headerRight: navigation.getParam('profileName') ?
      null
      :
      <LogoutButton navigation={navigation} />
  });

  render() {
    const {navigation} = this.props;

    return (
      <ProfileInfo
        profileName={navigation.getParam('profileName')}
        navigation={navigation}
      />
    );
  }
}

export default ProfileScreen;