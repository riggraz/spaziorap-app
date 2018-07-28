import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const UserInfo = ({username, handleUsernamePress, handleLoginPress}) => {
    return (
      <View style={styles.userInfoBox}>
      {
        username ?
          <TouchableOpacity onPress={handleUsernamePress}>
            <Text style={styles.userInfoText}>{username}</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.userInfoText}>Accedi</Text>
          </TouchableOpacity>
      }
      </View>
    );
  }

export default UserInfo;

const styles = StyleSheet.create({
  userInfoBox: {
    marginRight: 16,
  },

  userInfoText: {
    fontSize: 22,
    color: 'white',
  },
});