import React from 'react';

import PostsList from '../../containers/PostsList';
import TopicPicker from '../../containers/TopicPicker';

class PostsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    headerLeft: (
      <TopicPicker />
    )
  });

  render() {
    return (
      <PostsList />
    );
  }
}

export default PostsScreen;