import React from 'react';
import {
  Text,
} from 'react-native';

import postBodySize from '../../helpers/postBodySize';
import excerptOf from '../../helpers/excerptOf';
import excerptLength from '../../helpers/excerptLength';

import postListItemStyles from '../../styles/postListItemStyles';

import {LARGE, MEDIUM} from '../../constants/sizes';

const PostBody = ({body, makeExcerpt, horizontal, hasUrl}) => (
  <Text
    style={
      [
        postListItemStyles.postBody,
        horizontal ? postListItemStyles.postBodyMedium :
          postBodySize(body) === LARGE ? postListItemStyles.postBodyLarge
            : postBodySize(body) === MEDIUM ? postListItemStyles.postBodyMedium
              : postListItemStyles.postBodySmall
      ]
    }>
    {
      makeExcerpt ?
        excerptOf(body, excerptLength(horizontal, hasUrl))
      :
        body
    }
  </Text>
);

export default PostBody;