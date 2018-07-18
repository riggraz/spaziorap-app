import React from 'react';

import TopicsList from '../../containers/TopicsList';

class TopicsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: 'Argomenti',
  });

  render() {
    return (
      <TopicsList navigation={this.props.navigation} />
    );
  }
}

export default TopicsScreen;