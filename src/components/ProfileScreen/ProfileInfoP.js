import React from 'react';
import {
  View,
  Text,
} from  'react-native';

import PostsList from '../../containers/PostsList';

import globalStyles from '../../styles/global/globalStyles';
import profileStyles from '../../styles/profileStyles';

import {POSTS_BY_TOPIC, SINGLE_POST, PROFILE_PAGE} from '../../constants/navigation';

const ProfileInfoP = ({username, navigation}) => {
  const branch = 'profile';

  return (
    <View style={globalStyles.container}>
      <Text style={profileStyles.username}>{username}</Text>

      <PostsList branch={branch}
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
              {postId, postTitle, branch}
            );
          }
        }
      />
    </View>
  );
};

export default ProfileInfoP;