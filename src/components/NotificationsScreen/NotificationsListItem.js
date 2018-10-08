import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

import friendlyDate from '../../helpers/friendlyDate';

import {MAIN_COLOR} from '../../constants/colors';

const NotificationsListItem = ({
  senderUsername,
  postId,
  read,
  postBody,
  createdAt,

  handlePress,
}) => (
  <TouchableOpacity onPress={handlePress}>
    <View style={globalStyles.box}>
      {
        read ?
          <Text style={styles.read}>⬤ letta</Text>
        :
          <Text style={styles.new}>⬤ nuova</Text>
      }
      <Text style={styles.notificationText}>
        <Text style={styles.boldText}>{senderUsername}</Text>
        <Text> ti ha risposto in </Text>
        <Text style={styles.boldText}>{postBody.slice(0, 50) + '...'}</Text>
      </Text>
      <Text style={styles.notificationDate}>{friendlyDate(createdAt)} fa</Text>
    </View>
  </TouchableOpacity>
);

export default NotificationsListItem;

const styles = StyleSheet.create({
  new: {
    fontSize: 16,
    color: MAIN_COLOR,

    marginBottom: 8,
  },

  read: {
    fontSize: 16,
    color: 'grey',

    marginBottom: 8,
  },

  notificationText: {
    fontSize: 17,
  },

  notificationDate: {
    fontSize: 14,
    fontStyle: 'italic',

    marginTop: 8,
  },

  boldText: {
    fontWeight: 'bold',
  },
});