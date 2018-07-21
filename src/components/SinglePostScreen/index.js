import React from 'react';

import HeaderRight from '../PostsScreen/HeaderRight';
import Post from '../../containers/Post';

import getOf from '../../helpers/getOf';

import {POSTS_BY_TOPIC} from '../../constants/navigation';

class SinglePostScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: navigation.getParam('postTitle', 'Post Sconosciuto'),
  });

  render() {
    const {navigation} = this.props;

    return (
      <Post of={getOf(navigation)} 
        id={navigation.getParam('postId', '-1')}
        navigateToPostsByTopic={
          topicName => navigation.navigate(POSTS_BY_TOPIC, {topicName})
        }
      />
    );
  }
}

export default SinglePostScreen;