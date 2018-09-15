import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const UserInfo = ({username, score, isLoggingIn, handleUsernamePress, handleLoginPress}) => (
  <View style={styles.userInfoBox}>
  {
    isLoggingIn ?
      <ActivityIndicator size='large' color='white' />
    :
      username ?
        <TouchableOpacity onPress={handleUsernamePress}>
          <Text style={styles.userInfoText}>
            {username} ({score})
          </Text>
        </TouchableOpacity>
      :
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.userInfoText}>Accedi</Text>
        </TouchableOpacity>
  }
  </View>
);

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