import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const HeaderButton = ({label, size, handlePress}) => (
  <TouchableOpacity onPress={handlePress} style={styles.container}>
    <Text style={[
      styles.text,
      size === 'm' ? styles.mediumText : styles.smallText,
    ]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },

  text: {
    color: 'white',
  },

  mediumText: {
    fontSize: 22,
  },

  smallText: {
    fontSize: 16,
  },
});