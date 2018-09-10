import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import {MAIN_COLOR} from '../constants/colors';

import {NEW_POST, LOGIN} from '../constants/navigation';

const NewButtonP = ({isUserLoggedIn, navigation}) => (
  <TouchableOpacity
    onPress={() => isUserLoggedIn ? navigation.navigate(NEW_POST) : navigation.navigate(NEW_POST)} //DA CAMBIARE
    style={styles.button}
  >
    <Text style={styles.text}>+</Text>
  </TouchableOpacity>
);

export default NewButtonP;

const styles = StyleSheet.create({
  button: {
    width: 64,

    backgroundColor: MAIN_COLOR,
    borderRadius: 25,
  },
  
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 36,
  },
});