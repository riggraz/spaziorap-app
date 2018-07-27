import React from 'react';
import {Text} from 'react-native';

import postListItemStyles from '../../styles/postListItemStyles';

const PostBody = ({body}) => (
  <Text style={postListItemStyles.postExcerpt}>
    {body}
  </Text>
);

export default PostBody;