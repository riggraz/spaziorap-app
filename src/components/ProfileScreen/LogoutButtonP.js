import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import {POSTS} from '../../constants/navigation';

const LogoutButtonP = ({handleLogout, navigation}) => (
  <View style={styles.logoutBox}>
    <TouchableOpacity
      onPress={
        () => {
          handleLogout();
          navigation.navigate(POSTS);
        }
      }
    >
      <Text style={styles.logoutText}>Esci</Text>
    </TouchableOpacity>
  </View>
);

export default LogoutButtonP;

const styles = StyleSheet.create({
  logoutBox: {
    marginRight: 16,
  },

  logoutText: {
    fontSize: 22,
    color: 'white',
  },
});