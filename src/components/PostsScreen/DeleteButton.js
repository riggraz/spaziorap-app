import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const DeleteButton = ({handleDeletePost}) => (
  <TouchableOpacity onPress={handleDeletePost}>
    <Text style={styles.text}>Elimina post</Text>
  </TouchableOpacity>
);

export default DeleteButton;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 16,
  },
});