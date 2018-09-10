import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';

import postTypePickerStyles from '../../../styles/postTypePickerStyles';

const PostTypeOption = ({label, postType, selectedPostType, handlePostTypeChange}) => (
  <TouchableOpacity onPress={() => handlePostTypeChange(postType)}>
    <Text
      style={[
        postTypePickerStyles.selectable,
        (postType === selectedPostType ?
          postTypePickerStyles.selected
        :
          postTypePickerStyles.notSelected),
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default PostTypeOption;