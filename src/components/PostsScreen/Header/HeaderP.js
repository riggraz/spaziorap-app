import React from 'react';
import {View, StyleSheet} from 'react-native';

import TopicPicker from './TopicPicker';
import LoadingInfo from './LoadingInfo';
import UserInfo from './UserInfo';

class HeaderP extends React.Component {
  render() {
    const {topics, selectedTopic, handleTopicChange} = this.props;
    const {isLoading, navigation} = this.props;
    const {username} = this.props;

    return (
      <View style={styles.header}>
        <TopicPicker
          topics={topics}
          selectedTopic={selectedTopic}
          handleTopicChange={handleTopicChange}
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