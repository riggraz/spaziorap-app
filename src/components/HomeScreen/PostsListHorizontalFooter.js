import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

const PostsListHorizontalFooter = ({handleNavigateToPosts}) => (
  <View style={[globalStyles.horizontalBox, styles.container]}>
    <TouchableOpacity onPress={handleNavigateToPosts}>
      <Image
        source={require('../../../assets/images/universe-pack/telescope.png')}
        style={styles.icon}
      />
      <Text style={styles.text}>Per vedere tutti i post clicca qui.</Text>
    </TouchableOpacity>
  </View>
);

export default PostsListHorizontalFooter;

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