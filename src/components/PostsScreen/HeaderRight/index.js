import React from 'react';
import {View, StyleSheet} from 'react-native';

import UserInfo from './UserInfo';

import {LOGIN, PROFILE} from '../../../constants/navigation';

const HeaderRightP = ({userId, username, score, navigation, handleProfileRefresh}) =>
  <View>
    <UserInfo
      username={username}
      score={score}
      handleUsernamePress={
        () => {
          handleProfileRefresh(userId);
          navigation.navigate(PROFILE);
        }
      }
      handleLoginPress={() => navigation.navigate(LOGIN)}
    />
  </View>

export default HeaderRightP;