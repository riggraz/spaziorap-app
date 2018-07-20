import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const BackButton = ({goBack}) =>
  <TouchableOpacity onPress={goBack}>
    <Text style={styles.arrow}>←</Text>
  </TouchableOpacity>

export default BackButton;

const styles = StyleSheet.create({
  arrow: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
});