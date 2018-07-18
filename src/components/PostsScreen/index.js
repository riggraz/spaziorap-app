import React from 'react';

import PostsList from '../../containers/PostsList';
import HeaderLeft from '../../containers/HeaderLeft';
import HeaderRight from '../../containers/HeaderRight';

class PostsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    headerLeft: (
      <HeaderLeft navigation={navigation} />
    ),
    headerRight: (
      <HeaderRight navigation={navigation} />
    ),
  });

  render() {
    return (
      <PostsList />
    );
  }
}

export default PostsScreen;