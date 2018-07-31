import React from 'react';
import {Text} from 'react-native';

import excerptOf from '../../helpers/excerptOf';

import postListItemStyles from '../../styles/postListItemStyles';

const PostBody = ({body}) => (
  <Text style={postListItemStyles.postExcerpt}>
    {excerptOf(body, 150)}
  </Text>
);

export default PostBody;