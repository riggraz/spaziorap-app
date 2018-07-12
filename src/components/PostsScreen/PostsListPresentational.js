import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  RefreshControl
} from 'react-native';

import PostListItem from './PostListItem';

import globalStyles from '../../styles/global/globalStyles';

class PostsListPresentational extends React.Component {
  render() {
    const { posts, areFetching } = this.props;
    
    return (
      <View style={globalStyles.container}>
        <FlatList
          style={globalStyles.list}
          data={posts}
          renderItem={
            ({item}) =>
              <PostListItem id={item.id}
                title={item.title}
                excerpt={item.body.slice(0, 60)}
              />
            }
          keyExtractor={
            post => post.id.toString()
          }
        />
      </View>
    );
  }
}

export default PostsListPresentational;