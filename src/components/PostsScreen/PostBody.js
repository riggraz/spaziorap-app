import React from 'react';
import {
  Text,
} from 'react-native';

import postBodySize from '../../helpers/postBodySize';
import excerptOf from '../../helpers/excerptOf';

import postListItemStyles from '../../styles/postListItemStyles';

const PostBody = ({body, makeExcerpt}) => (
  <Text
    style={
      [
        postListItemStyles.postBody,
        postBodySize(body) === 'large' ? postListItemStyles.postBodyLarge
          : postBodySize(body) === 'medium' ? postListItemStyles.postBodyMedium
            : postListItemStyles.postBodySmall
      ]
    }>
    {
      makeExcerpt ?
        excerptOf(body, 150)
      :
        body
    }
  </Text>
);

export default PostBody;