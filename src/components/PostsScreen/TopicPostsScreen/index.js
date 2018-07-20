import React from 'react';

import PostsList from '../../../containers/PostsList';
import HeaderLeft from '../../../containers/HeaderLeft';
import HeaderRight from '../../../containers/HeaderRight';

class TopicPostsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: navigation.getParam('topicName', 'Argomento Sconosciuto'),
    headerRight: <HeaderRight navigation={navigation} />,
  });

  render() {
    return (
      <PostsList of='selectedTopic' navigation={this.props.navigation}/>
    );
  }
}

export default TopicPostsScreen;