import React from 'react';

import TopicsList from '../../containers/TopicsList';

import {POSTS_LIST_BY_TOPIC} from '../../constants/navigation';

class TopicsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: 'Argomenti',
  });

  render() {
    return (
      <TopicsList navigateToPostsListByTopic={
        () => this.props.navigation.navigate(POSTS_LIST_BY_TOPIC)
      }
      />
    );
  }
}

export default TopicsScreen;