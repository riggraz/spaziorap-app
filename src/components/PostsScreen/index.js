import React from 'react';

import HeaderRight from '../../containers/HeaderRight';
import PostsList from '../../containers/PostsList';

import getBranch from '../../helpers/getBranch';

import {POSTS_BY_TOPIC, SINGLE_POST, PROFILE_PAGE} from '../../constants/navigation';

class PostsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: navigation.getParam('topicName', 'Messaggi'),
    headerRight: <HeaderRight navigation={navigation} />,
  });

  render() {
    const {navigation} = this.props;
    const branch = getBranch(navigation);

    return (
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
      />
    );
  }
}

export default PostsScreen;