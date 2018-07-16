import React from 'react';

import PostsList from '../../containers/PostsList';
import TopicPicker from '../../containers/TopicPicker';
import UserInfo from '../../containers/UserInfo';

class PostsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    headerLeft: (
      <TopicPicker />
    ),
    headerRight: (
      <UserInfo handlePress={() => navigation.navigate('Login')} />
    ),
  });

  render() {
    return (
      <PostsList />
    );
  }
}

export default PostsScreen;