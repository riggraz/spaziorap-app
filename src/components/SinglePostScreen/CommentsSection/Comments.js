import React from 'react';
import {
  View,
} from 'react-native';

import Comment from './Comment';

import friendlyDate from '../../../helpers/friendlyDate';

const Comments = ({comments, parentId, level, ...other}) => (
  <View>
    {
      comments.map(comment => {
        if (comment.parentId == parentId) {
          return (
            <View key={comment.id} style={{marginBottom: (level == 0) ? 16 : 0}}>
              <Comment
                id={comment.id}
                body={comment.body}
                userId={comment.userId}
                username={comment.userUsername}
                createdAt={comment.createdAt}
                level={level}

                {...other}
              />

              <Comments
                comments={comments} 
                parentId={comment.id}
                level={level+1}

                {...other}
              />
            </View>
          );
        }
        return null;
      })
    }
  </View>
);

export default Comments;