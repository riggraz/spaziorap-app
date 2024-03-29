import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import PostTypeOption from './PostTypeOption';

import {
  TEXT_POST,
  VIDEO_POST,
} from '../../../constants/postTypes';

import postTypePickerStyles from '../../../styles/postTypePickerStyles';

const PostTypePickerP = ({selectedPostType, handlePostTypeChange}) => (
  <View style={postTypePickerStyles.container}>
    <Text style={postTypePickerStyles.text}>nuovo post: </Text>

    <PostTypeOption
      label='testo'
      postType={TEXT_POST}
      selectedPostType={selectedPostType}
      handlePostTypeChange={handlePostTypeChange}
    />

    <PostTypeOption
      label='video'
      postType={VIDEO_POST}
      selectedPostType={selectedPostType}
      handlePostTypeChange={handlePostTypeChange}
    />
  </View>
);

export default PostTypePickerP;