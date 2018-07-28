import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import {NEW_POST_MENU} from '../constants/navigation';

const NewButton = ({navigation}) =>
  <TouchableOpacity onPress={() => navigation.navigate(NEW_POST_MENU)} style={styles.button}>
    <Text style={styles.text}>+</Text>
  </TouchableOpacity>

export default NewButton;

const styles = StyleSheet.create({
  button: {
    width: 64,

    backgroundColor: '#F15946',
    borderRadius: 25,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 36,
  },
});