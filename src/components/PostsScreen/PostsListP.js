import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Dimensions,
} from 'react-native';

import PostsListItem from './PostsListItem';
import SkeletonLoadingPost from '../SkeletonLoading/SkeletonLoadingPost';
import SkeletonLoadingProfileInfo from '../SkeletonLoading/SkeletonLoadingProfileInfo';
import TopicsListHorizontal from '../../containers/TopicsListHorizontal';
import PostsListTopicHeader from './PostsListTopicHeader';
import PostsListEndReachedFooter from './PostsListEndReachedFooter';
import PostsListHorizontalFooter from '../HomeScreen/PostsListHorizontalFooter';

import friendlyDate from '../../helpers/friendlyDate';

import globalStyles from '../../styles/globalStyles';

import {MAIN_COLOR} from '../../constants/colors';
import {POSTS_BY_TOPIC} from '../../constants/navigation';
import {
  LATEST_BRANCH,
  TRENDING_BRANCH,
  SELECTEDTOPIC_BRANCH,
  PROFILE_BRANCH,
} from '../../constants/branches';

class PostsListP extends React.Component {

  _getTopicName = (topicId, topics) => (
    (topicId && topics) ?
      topics.find(topic => topic.id === topicId).name
    :
      'nessuna'
  );

  _getTopicDescription = (topicId, topics) => (
    (topicId && topics) ?
      topics.find(topic => topic.id === topicId).description
    :
      'nessuna descrizione disponibile'
  );

  _handleRefresh = () => {
    const {handleRefresh, selectedTopic, selectedProfile, loggedUserId, branch} = this.props;

    if (branch === LATEST_BRANCH || branch === TRENDING_BRANCH) handleRefresh(branch, 0, loggedUserId);
    else if (branch === PROFILE_BRANCH) handleRefresh(branch, selectedProfile, loggedUserId);
    else handleRefresh(branch, selectedTopic,loggedUserId);
  }

  _renderListHeader = () => {
    const {horizontal, branch} = this.props;

    if (horizontal) return null;

    if (branch === SELECTEDTOPIC_BRANCH) {
      return (
        <PostsListTopicHeader
          topicName={this._getTopicName(this.props.selectedTopic, this.props.topics)}
          topicDescription={this._getTopicDescription(this.props.selectedTopic, this.props.topics)}
        />
      );
    } else if (branch === LATEST_BRANCH) {
      return (
        <TopicsListHorizontal
          titleVisible={false}
          navigateToPostsListByTopic={this.props.navigateToPostsByTopic}
        />
      );
    }

    return null;
  }

  _renderListFooter = () => {
    const {postsAreFetching, endReached, horizontal} = this.props;

    if (horizontal) {
      return <PostsListHorizontalFooter handleNavigateToPosts={this.props.navigateToPosts} />;
    } else {
      if (postsAreFetching) {
        return <ActivityIndicator size='large' color={MAIN_COLOR} style={{marginBottom: 8}} />
      }

      if (endReached) {
        return <PostsListEndReachedFooter />;
      }
    }

    return null;
  }

  _renderListItem = item => {
    const {
      topics,

      handlePostPress,
      handleTopicChange,
      handleProfileChange,

      navigateToSinglePostScreen,
      navigateToPostsByTopic,
      navigateToProfile,

      admin,
      accessToken,
      handleDeletePost,

      horizontal,

      branch,
    } = this.props;
    
    return (
      <PostsListItem
        id={item.id}
        body={item.body}
        url={item.url}
        user={item.userUsername}
        topic={this._getTopicName(item.topicId, topics)}
        commentsCount={item.commentsCount}
        createdAt={friendlyDate(item.createdAt)}

        handlePress={
          () => {
            handlePostPress(item.id);
            navigateToSinglePostScreen(item.id, item.body);
          }
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

        admin={admin}
        handleDeletePost={
          () => handleDeletePost(item.id, accessToken)
        }

        horizontal={horizontal}

        branch={branch}
      />
    );
  }

  _renderRefreshControl = () => {
    const {postsAreFetching, horizontal} = this.props;

    if (!horizontal) {
      return (
        <RefreshControl
          refreshing={postsAreFetching}
          onRefresh={this._handleRefresh}
        />
      );
    }

    return null;
  }

  _handleEndReached = () => {
    const {
      postsAreFetching,

      handleLoadMore,
      page,
      endReached,

      selectedTopic,
      selectedProfile,

      horizontal,

      branch,
    } = this.props;

    if (!horizontal && !postsAreFetching && !endReached) {
      handleLoadMore(
        branch,
        branch === SELECTEDTOPIC_BRANCH ? selectedTopic : selectedProfile,
        page,
      );
    }
  }

  _getItemLayout = (data, index) => {
    //This is the width of a horizontalBox (see globalStyles.js)
    const POST_WIDTH = Dimensions.get('window').width - 64;

    return {
      length: POST_WIDTH,
      offset: POST_WIDTH * index,
      index,
    };
  }

  _shouldRenderList = () => {
    const {postsAreFetching, page, topicsAreFetching} = this.props;

    return (
      !topicsAreFetching &&
      (page !== 1 || (!postsAreFetching && page === 1))
    );
  }

  _renderLoadingPosts = () => {
    const {horizontal} = this.props;

    if (horizontal) {
      return <SkeletonLoadingPost />
    }
    else {
      return (
        <ScrollView style={{flex: 1}}>
          {this._renderListHeader()}
          <SkeletonLoadingPost />
          <SkeletonLoadingPost />
          <SkeletonLoadingPost />
        </ScrollView>
      );
    }
  }

  render() {
    const {posts, horizontal} = this.props;

    return this._shouldRenderList() ?
      (
        <FlatList
          horizontal={horizontal}
          data={horizontal ? posts.slice(0, 9) : posts}

          refreshControl={this._renderRefreshControl()}
          ListHeaderComponent={this._renderListHeader}
          renderItem={({item}) => this._renderListItem(item)}
          ListFooterComponent={this._renderListFooter}

          onEndReached={this._handleEndReached}
          onEndReachedThreshold={0.6}

          keyExtractor={post => post.id}

          initialNumToRender={10}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={100}
          getItemLayout={horizontal ? (data, index) => this._getItemLayout(data, index) : null}

          style={globalStyles.container}
        />
      )
    :
      this._renderLoadingPosts()
  }
}

export default PostsListP;