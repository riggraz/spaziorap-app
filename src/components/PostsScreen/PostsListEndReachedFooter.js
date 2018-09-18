import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

const PostsListEndReachedFooter = () => (
  <View style={[globalStyles.box, styles.container]}>
    <Image
      source={require('../../../assets/images/universe-pack/robot.png')}
      style={styles.icon}
    />
    <Text style={styles.text}>Abbiamo finito! Non ci sono altri messaggi da visualizzare.</Text>
  </View>
);

export default PostsListEndReachedFooter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  icon: {
    width: 64,
    height: 64,
    alignSelf: 'center',

    marginBottom: 4,
  },

  text: {
    fontSize: 20,
    textAlign: 'center',

    marginTop: 4,
  },
});