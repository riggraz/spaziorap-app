import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';

import NewCommentForm from './NewCommentForm';
import Comments from './Comments';

import {MAIN_COLOR} from '../../../constants/colors';
import globalStyles from '../../../styles/globalStyles';

const CommentsSection = ({comments, commentsAreFetching, handleCommentSubmit, ...other}) => (
  <View>
    <NewCommentForm
      handleCommentSubmit={handleCommentSubmit}
      parentId={null}
      isSubmitting={other.newCommentIsSubmitting}

      handleScrollViewAwareness={other.handleScrollViewAwareness}

      postId={other.postId}

      isLoggedIn={other.isLoggedIn}
      accessToken={other.accessToken}
      navigation={other.navigation}
    />

    {
      comments.length === 0 && !commentsAreFetching ?
        <View style={[globalStyles.box, {alignItems: 'center',}]}>
          <Image
            source={require('../../../../assets/images/universe-pack/empty-box.png')}
            style={{width: 64, height: 64}}
          />
          <Text style={{fontSize: 20}}>non ci sono ancora commenti</Text>
        </View>
      :
        null
    }

    {
      comments.length !== 0 && comments[0].postId == other.postId ?
        <Comments
          comments={comments}
          handleCommentSubmit={handleCommentSubmit}
          parentId={null}
          level={0}
          
          {...other}
        />
      :
        null
    }

    {
      commentsAreFetching ?
        <ActivityIndicator size='large' color={MAIN_COLOR} />
      :
        null
    }
  </View>
);

export default CommentsSection;