import React from 'react';
import {View, StyleSheet} from 'react-native';

import TopicInfo from './TopicInfo';
import LoadingInfo from './LoadingInfo';

import {TOPICS} from '../../../constants/navigation';

class HeaderLeftP extends React.Component {

  _getSelectedTopicName = (selectedTopic, topics) => {
    if (selectedTopic === 'latest') return 'nuovi';
    else if (selectedTopic === 'trending') return 'di moda';
    else if (selectedTopic) return topics.find(topic => topic.id == selectedTopic).name;
    else return '';
  }

  render() {
    const {topics, selectedTopic} = this.props;
    const {isLoading, navigation} = this.props;

    const selectedTopicName = this._getSelectedTopicName(selectedTopic, topics);

    return (
      <View style={styles.header}>
        <TopicInfo
          selectedTopicName={selectedTopicName}
          handlePress={() => navigation.navigate(TOPICS)}
        />
        <LoadingInfo
          isLoading={isLoading}
        />
      </View>
    );
  }
}

export default HeaderLeftP;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
  },
});