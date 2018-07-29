import React from 'react';
import {View, StyleSheet} from 'react-native';

import BackButton from './BackButton';
import TopicInfo from './TopicInfo';
import LoadingInfo from './LoadingInfo';

import {POSTS_LIST, TOPICS_LIST} from '../../../constants/navigation';
import {LATEST_BRANCH, TRENDING_BRANCH} from '../../../constants/branches';

class HeaderLeftP extends React.Component {

  _getSelectedTopicName = (selectedTopic, topics) => {
    if (selectedTopic === LATEST_BRANCH) return 'nuovi';
    else if (selectedTopic === TRENDING_BRANCH) return 'di moda';
    else if (selectedTopic) return topics.find(topic => topic.id == selectedTopic).name;
    else return '';
  }

  render() {
    const {topics, selectedTopic} = this.props;
    const {isLoading, navigation} = this.props;

    const selectedTopicName = this._getSelectedTopicName(selectedTopic, topics);

    return (
      <View style={styles.header}>
        {
          (navigation.state.routeName === POSTS_LIST) ?
            null
          :
            <BackButton goBack={() => navigation.goBack()} />
        }
        <TopicInfo
          selectedTopicName={selectedTopicName}
          handlePress={() => navigation.navigate(TOPICS_LIST)}
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