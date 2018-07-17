import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const UserInfo = ({username, handlePress}) => {
    return (
      <View style={styles.userInfoBox}>
      {
        username ?
          <Text style={styles.userInfoText}>{username}</Text>
        :
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.userInfoText}>Login</Text>
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