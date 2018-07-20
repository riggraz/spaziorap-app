import React from 'react';

import PostsList from '../../../containers/PostsList';
import HeaderLeft from '../../../containers/HeaderLeft';
import HeaderRight from '../../../containers/HeaderRight';

import {POSTS_BY_TOPIC} from '../../../constants/navigation';

class LatestPostsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: 'Spazio Rap',
    headerRight: <HeaderRight navigation={navigation} />,
  });

  render() {
    return (
      <PostsList of='latest' navigateToPostsByTopic={
        topicName => this.props.navigation.navigate(POSTS_BY_TOPIC, { topicName })
      }
      />
    );
  }
}

export default LatestPostsScreen;