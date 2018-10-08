import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import {NOTIFICATIONS, LOGIN} from '../constants/navigation';

const NotificationsButtonP = ({
  numberOfNotifications,
  areFetching,
  handleNotificationsRefresh,
  
  isLoggedIn,
  isLoggingIn,
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
        {
          topBar ?
            areFetching ?
              'notifiche (...)'
            :
              'notifiche (' + numberOfNotifications + ')'
          :
            (( !areFetching && numberOfNotifications > 0) ? '📬' : '📭') + ' ' +
            (areFetching ? '...' : numberOfNotifications) + ' ' +
            'nuov' + (numberOfNotifications === 1 ? 'a' : 'e') + ' ' +
            'notific' + (numberOfNotifications === 1 ? 'a' : 'he')
        }
      </Text>
    </TouchableOpacity>
  :
    topBar ?
      null
    :
      isLoggingIn ?
        <Text style={styles.text}>📭 ... nuove notifiche</Text>
      :
        <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
          <Text style={styles.text}>benvenuto su spazio rap</Text>
        </TouchableOpacity>
);

export default NotificationsButtonP;

const styles = StyleSheet.create({
  topBarText: {
    fontSize: 19,
    color: 'white',
    marginRight: 16,
  },

  text: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
  },
});