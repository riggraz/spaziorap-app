import React from 'react';
import {View, StyleSheet} from 'react-native';

import TopicInfo from './TopicInfo';
import LoadingInfo from './LoadingInfo';
import UserInfo from './UserInfo';

class HeaderP extends React.Component {
  constructor() {
    super();

    this._getSelectedTopicName = this._getSelectedTopicName.bind(this);
  }

  _getSelectedTopicName(selectedTopic, topics) {
    if (selectedTopic === 'latest') return 'nuovi';
    else if (selectedTopic === 'trending') return 'di moda';
    else if (selectedTopic) return topics.filter(topic => topic.id == selectedTopic)[0].name;
    else return '';
  }

  render() {
    const {topics, selectedTopic} = this.props;
    const {isLoading, navigation} = this.props;
    const {username} = this.props;

    const selectedTopicName = this._getSelectedTopicName(selectedTopic, topics);

    return (
      <View style={styles.header}>
        <TopicInfo
          selectedTopicName={selectedTopicName}
          handlePress={() => navigation.navigate('Topics')}
        />
        <LoadingInfo
          isLoading={isLoading}
        />
        <UserInfo
          username={username}
          handlePress={() => navigation.navigate('Login')}
        />
      </View>
    );
  }
}

export default HeaderP;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});