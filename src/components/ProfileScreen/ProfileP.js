import React from 'react';
import {
  View,
  Text,
} from  'react-native';

import PostsList from '../../containers/PostsList';

import profileStyles from '../../styles/profileStyles';

import {POSTS_BY_TOPIC, SINGLE_POST, PROFILE_PAGE} from '../../constants/navigation';
import {PROFILE_BRANCH} from '../../constants/branches';

const ProfileP = ({username, score, navigation}) => (
  <View style={{flex: 1}}>
    <View style={profileStyles.userInfoBox}>
      <Text style={profileStyles.username}>{username}</Text>
      <Text style={profileStyles.score}>{score}</Text>
    </View>

    <PostsList branch={PROFILE_BRANCH}
      navigateToProfile={
        profileName => navigation.navigate(PROFILE_PAGE, {profileName})
      }
      navigateToPostsByTopic={
        topicName => navigation.navigate(POSTS_BY_TOPIC, {topicName})
      }
      navigateToSinglePostScreen={
        (postId, postTitle) => {
          navigation.push(
            SINGLE_POST,
            {postId, postTitle, branch: PROFILE_BRANCH},
          );
        }
      }
    />
  </View>
);

export default ProfileP;