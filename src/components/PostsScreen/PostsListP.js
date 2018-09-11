import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import PostsListItem from './PostsListItem';
import SkeletonLoadingPost from '../SkeletonLoading/SkeletonLoadingPost';
import SkeletonLoadingProfileInfo from '../SkeletonLoading/SkeletonLoadingProfileInfo';

import friendlyDate from '../../helpers/friendlyDate';

import {LATEST_BRANCH, TRENDING_BRANCH, PROFILE_BRANCH} from '../../constants/branches';
import globalStyles from '../../styles/globalStyles';

class PostsListP extends React.Component {

  _getTopicName = (topicId, topics) => (
    (topicId && topics) ?
      topics.find(topic => topic.id === topicId).name
    :
      'nessuna'
  );

  _handleRefresh = () => {
    const {handleRefresh, selectedTopic, selectedProfile, branch} = this.props;

    if (branch === LATEST_BRANCH || branch === TRENDING_BRANCH) handleRefresh(branch);
    else if (branch === PROFILE_BRANCH) handleRefresh(branch, selectedProfile);
    else handleRefresh(branch, selectedTopic);
  }

  render() {
    const {posts, postsAreFetching} = this.props;
    const {topics, topicsAreFetching} = this.props;

    const {handleProfileChange, navigateToProfile} = this.props;
    const {handleTopicChange, navigateToPostsByTopic} = this.props;
    const {navigateToSinglePostScreen} = this.props;

    const {horizontal} = this.props;

    return (!postsAreFetching && !topicsAreFetching) ?
      (
        <FlatList
          data={posts}
          renderItem={
            ({item}) =>
              <PostsListItem id={item.id}
                body={item.body}
                url={item.url}
                user={item.userUsername}
                topic={this._getTopicName(item.topicId, topics)}
                createdAt={friendlyDate(item.createdAt)}

                handlePress={
                  () => navigateToSinglePostScreen(item.id, item.body)
                }
                handleProfileChange={
                  () => {
                    handleProfileChange(item.userId);
                    navigateToProfile(item.userUsername);
                  }
                }
                handleTopicChange={
                  () => {
                    const topicName = this._getTopicName(item.topicId, topics);
                    handleTopicChange(item.topicId, topicName);
                    navigateToPostsByTopic(topicName);
                  }
                }

                horizontal={horizontal}

                branch={this.props.branch}
              />
            }
          keyExtractor={
            post => post.id.toString()
          }
          refreshControl={
            horizontal ?
              null
            :
              <RefreshControl
                refreshing={postsAreFetching}
                onRefresh={this._handleRefresh}
              />
          }
          horizontal={horizontal}
          style={globalStyles.container}
        />
      )
    :
      horizontal ?
        <SkeletonLoadingPost />
      :
        <View>
          <SkeletonLoadingPost />
          <SkeletonLoadingPost />
          <SkeletonLoadingPost />
        </View>
  }
}

export default PostsListP;