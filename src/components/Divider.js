import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = ({color, size}) => (
  <View
    style={[
      styles.divider,
      {borderBottomColor: color, borderBottomWidth: size}
    ]}
  />
);

export default Divider;

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,

    alignSelf: 'stretch',
    marginVertical: 8,
  },
});