import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Entypo} from '@expo/vector-icons';

const BackButton = ({handlePress}) =>
  <TouchableOpacity onPress={handlePress}>
    {/* <Text style={styles.backButton}>✖</Text> */}
    <Entypo
      name='cross'
      size={36}
      color='white'
      style={styles.backButton}
    />
  </TouchableOpacity>

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 8,
    marginTop: 4,
    paddingLeft: 4,
    paddingRight: 4,
  },
});