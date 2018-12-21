import React from 'react';
import {
  TouchableOpacity,
  Alert,
  Text,
  StyleSheet,
} from 'react-native';

const DeleteButton = ({handleDeletePost}) => (
  <TouchableOpacity onPress={() => {
    Alert.alert(
      'Eliminare post?',
      'Sei sicuro di voler eliminare questo post?',
      [
        { text: 'No', onPress: () => null },
        { text: 'Sì', onPress: handleDeletePost },
      ],
    )
  }}>
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