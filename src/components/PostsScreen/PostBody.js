import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import excerptOf from '../../helpers/excerptOf';

import postListItemStyles from '../../styles/postListItemStyles';

const PostBody = ({body, handlePress}) => (
  <TouchableOpacity onPress={handlePress}>
    <Text style={postListItemStyles.postExcerpt}>
      {excerptOf(body, 150)}
    </Text>
  </TouchableOpacity>
);

export default PostBody;