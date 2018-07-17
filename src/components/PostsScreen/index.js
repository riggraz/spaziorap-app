import React from 'react';

import PostsList from '../../containers/PostsList';
import Header from '../../containers/Header';

class PostsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    headerLeft: (
      <Header navigation={navigation} />
    ),
  });

  render() {
    return (
      <PostsList />
    );
  }
}

export default PostsScreen;