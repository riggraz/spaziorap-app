import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from  'react-native';

import PostsList from '../../containers/PostsList';
import NotificationsButton from '../../containers/NotificationsButton';

import profileStyles from '../../styles/profileStyles';

import {POSTS_BY_TOPIC, SINGLE_POST, PROFILE_PAGE} from '../../constants/navigation';
import {PROFILE_BRANCH} from '../../constants/branches';

const ProfileP = ({username, score, navigation}) => (
  <View style={{flex: 1}}>
    <View style={profileStyles.userInfoBox}>
      <View style={{flexDirection: 'row'}}>
        <Text style={profileStyles.username}>{username} (</Text>
        {
          score === '...' ?
            <ActivityIndicator size='small' color='black' />
          :
            <Text style={profileStyles.score}>{score}</Text>
        }
        <Text style={profileStyles.username}> punti)</Text>
      </View>

      {!navigation.getParam('profileName') ? <NotificationsButton navigation={navigation} /> : null}
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
          navigation.navigate(
            SINGLE_POST,
            {postId, postTitle, branch: PROFILE_BRANCH},
          );
        }
      }
    />
  </View>
);

export default ProfileP;