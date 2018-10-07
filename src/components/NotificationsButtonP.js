import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import {NOTIFICATIONS} from '../constants/navigation';

const NotificationsButtonP = ({
  numberOfNotifications,
  areFetching,
  handleNotificationsRefresh,
  
  isLoggedIn,
  userId,

  topBar,
  navigation,
}) => (
  isLoggedIn ?
    <TouchableOpacity
      onPress={
        () => {
          navigation.navigate(NOTIFICATIONS);
          handleNotificationsRefresh(userId);
        }
      }
    >
      <Text style={[topBar ? styles.topBarText : styles.text]}>
        {topBar ? '' : '📬 apri centro '}notifiche ({numberOfNotifications})
      </Text>
    </TouchableOpacity>
  :
    null
);

export default NotificationsButtonP;

const styles = StyleSheet.create({
  topBarText: {
    fontSize: 22,
    color: 'white',
    marginRight: 16,
  },

  text: {
    fontSize: 22,
    color: 'black',
  },
});