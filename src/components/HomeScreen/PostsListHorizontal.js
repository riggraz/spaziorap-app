import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PostsList from '../../containers/PostsList';

import {POSTS, POSTS_BY_TOPIC, SINGLE_POST, PROFILE_PAGE} from '../../constants/navigation';

import globalStyles from '../../styles/globalStyles';
import homeStyles from '../../styles/homeStyles';

const PostsListHorizontal = ({branch, navigation}) => (
  <View style={globalStyles.hiddenBox}>
    <TouchableOpacity onPress={() => navigation.navigate(POSTS)}>
      <Text style={homeStyles.title}>Ultimi messaggi</Text>
    </TouchableOpacity>
    <PostsList branch={branch}
      navigateToProfile={
        profileName => navigation.navigate(PROFILE_PAGE, {profileName})
      }
      navigateToPostsByTopic={
        topicName => navigation.navigate(POSTS_BY_TOPIC, {topicName})
      }
      navigateToSinglePostScreen={
        (postId, postTitle) => {
          navigation.navigate(
            SINGLE_POST,
            {postId, postTitle, branch}
          );
        }
      }
      horizontal
    />
  </View>
);

export default PostsListHorizontal;