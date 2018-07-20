import React from 'react';

import TopicsList from '../../containers/TopicsList';

import {POSTS_BY_TOPIC} from '../../constants/navigation';

class TopicsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: 'Argomenti',
  });

  render() {
    return (
      <TopicsList navigateToPostsListByTopic={
        topicName => this.props.navigation.navigate(POSTS_BY_TOPIC, { topicName })
      }
      />
    );
  }
}

export default TopicsScreen;