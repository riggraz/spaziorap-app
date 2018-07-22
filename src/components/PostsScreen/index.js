import React from 'react';

import PostsList from '../../containers/PostsList';
import HeaderLeft from '../../containers/HeaderLeft';
import HeaderRight from '../../containers/HeaderRight';

import getBranch from '../../helpers/getBranch';

import {POSTS_BY_TOPIC, SINGLE_HOME_POST, SINGLE_POST} from '../../constants/navigation';

class PostsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: navigation.getParam('topicName', 'Spazio Rap'),
    headerRight: <HeaderRight navigation={navigation} />,
  });

  render() {
    const {navigation} = this.props;

    return (
      <PostsList branch={getBranch(navigation)}
        navigateToPostsByTopic={
          topicName => navigation.navigate(POSTS_BY_TOPIC, {topicName})
        }
        navigateToSinglePostScreen={
          (postId, postTitle) => {
            navigation.navigate(
              (getBranch(navigation) === 'latest' || getBranch(navigation) === 'trending') ? SINGLE_HOME_POST : SINGLE_POST,
              {postId, postTitle}
            );
          }
        }
      />
    );
  }
}

export default PostsScreen;