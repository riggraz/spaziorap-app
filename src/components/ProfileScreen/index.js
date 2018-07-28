import React from 'react';
import {Text} from 'react-native';

import ProfileInfo from '../../containers/ProfileInfo';

class ProfileScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: 'Profilo di ' + navigation.getParam('profileName'),
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