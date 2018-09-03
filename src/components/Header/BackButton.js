import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const BackButton = ({handlePress}) =>
  <TouchableOpacity onPress={handlePress}>
    <Text style={styles.backButton}>✖</Text>
  </TouchableOpacity>

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    color: 'white',
    fontSize: 24,
    marginLeft: 16,
    paddingLeft: 4,
    paddingRight: 4,
  },
});