import React from 'react';
import {View, StyleSheet} from 'react-native';

import UserInfo from './UserInfo';

const HeaderRightP = ({username, navigation}) =>
  <View>
    <UserInfo
      username={username}
      handlePress={() => navigation.navigate('Login')}
    />
  </View>

export default HeaderRightP;