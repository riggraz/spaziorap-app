import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const UserInfo = ({username, score, isLoggingIn, handleUsernamePress, handleLoginPress}) =>
    isLoggingIn ?
      <ActivityIndicator size='large' color='white' style={styles.marginRight} />
    :
      username ?
        <TouchableOpacity onPress={handleUsernamePress}>
          <View style={[{flexDirection: 'row'}, styles.marginRight]}>
            <Text style={styles.userInfoText}>
              {username}
            </Text>
            {
              score === '...' ?
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.userInfoText}>(</Text>
                  <ActivityIndicator size='small' color='white' />
                  <Text style={styles.userInfoText}>)</Text>
                </View>
              :
                <Text style={styles.userInfoText}> ({score})</Text>
            }
          </View>
        </TouchableOpacity>
      :
        <TouchableOpacity onPress={handleLoginPress} style={styles.marginRight}>
          <Text style={styles.userInfoText}>Accedi</Text>
        </TouchableOpacity>

export default UserInfo;

const styles = StyleSheet.create({
  marginRight: {
    marginRight: 16,
  },

  userInfoText: {
    fontSize: 22,
    color: 'white',
  },
});