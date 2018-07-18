import React from 'react';
import {View, StyleSheet} from 'react-native';

import UserInfo from './UserInfo';

import {LOGIN} from '../../../constants/navigation';

const HeaderRightP = ({username, navigation}) =>
  <View>
    <UserInfo
      username={username}
      handlePress={() => navigation.navigate(LOGIN)}
    />
  </View>

export default HeaderRightP;