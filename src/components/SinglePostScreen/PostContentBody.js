import React from 'react';
import {Text} from 'react-native';

import postStyles from '../../styles/postStyles';

const PostContentBody = ({body}) => <Text style={postStyles.body}>{body}</Text>

export default PostContentBody;