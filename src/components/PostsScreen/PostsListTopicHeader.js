import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import globalStyles from '../../styles/globalStyles';

import {WEBSITE_URL} from '../../constants/API';

const PostsListTopicHeader = ({topicName, topicDescription}) => (
  <View style={[globalStyles.box, styles.container]}>
    <Image
      source={{uri: `${WEBSITE_URL}/app/images/topics/${topicName}.png`}}
      style={styles.topicIcon}
    />
    <View style={{flex: 1}}>
      <Text style={styles.topicName}>{topicName}</Text>
      <Text style={styles.topicDescription}>{topicDescription}</Text>
    </View>
  </View>
);

export default PostsListTopicHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  topicIcon: {
    width: 64,
    height: 64,

    alignSelf: 'center',

    marginRight: 16,
  },

  topicName: {
    fontSize: 28,
  },

  topicDescription: {
    fontSize: 16,
  },
});