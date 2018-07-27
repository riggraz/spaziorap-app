import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  RefreshControl
} from 'react-native';

import PostsListItem from './PostsListItem';
import Loading from './Loading';

import globalStyles from '../../styles/global/globalStyles';

import friendlyDate from '../../helpers/friendlyDate';

class PostsListP extends React.Component {

  _getTopicName = (topicId, topics) => (
    (topicId && topics) ?
      topics.find(topic => topic.id === topicId).name
    :
      'nessuna'
  );

  _handleRefresh = () => {
    const {handleRefresh, selectedTopic, branch} = this.props;

    handleRefresh((branch === 'latest' || branch === 'trending') ? branch : selectedTopic);
  }

  render() {
    const {posts, postsAreFetching} = this.props;
    const {topics, topicsAreFetching} = this.props;

    const {handleTopicChange, navigateToPostsByTopic, navigateToSinglePostScreen} = this.props;

    return (!postsAreFetching && !topicsAreFetching) ?
      (
        <View style={globalStyles.container}>
          <FlatList
            style={globalStyles.list}
            data={posts}
            renderItem={
              ({item}) =>
                <PostsListItem id={item.id}
                  title={item.title}
                  body={item.body}
                  url={item.url}
                  user={item.userUsername}
                  topic={this._getTopicName(item.topicId, topics)}
                  createdAt={friendlyDate(item.createdAt)}

                  handlePress={
                    () => navigateToSinglePostScreen(item.id, item.title)
                  }
                  handleTopicChange={
                    () => {
                      const topicName = this._getTopicName(item.topicId, topics);
                      handleTopicChange(item.topicId, topicName);
                      navigateToPostsByTopic(topicName);
                    }
                  }
                />
              }
            keyExtractor={
              post => post.id.toString()
            }
            refreshControl={
              <RefreshControl
                refreshing={postsAreFetching}
                onRefresh={this._handleRefresh}
              />
            }
          />
        </View>
      )
    :
      null
  }
}

export default PostsListP;