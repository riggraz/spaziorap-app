import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

import {WEBSITE_URL} from '../../constants/API';

const TopicsListHorizontalItem = ({name, handlePress}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={{uri: `${WEBSITE_URL}/app/images/topics/${name}.png`}}
        style={styles.icon}
      />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  </View>
);

export default TopicsListHorizontalItem;

const styles = StyleSheet.create({
  container: {
    width: 72,
    height: 72,

    marginHorizontal: 8,
  },

  icon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },

  name: {
    fontSize: 16,
    textAlign: 'center',

    marginTop: 8,
  },
});