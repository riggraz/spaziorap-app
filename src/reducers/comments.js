import {
  START_COMMENTS_REQUEST,
  COMMENTS_REQUEST_SUCCESSFUL,
  COMMENTS_REQUEST_FAILURE,
} from '../actions/requestComments';

import {LIKE_SUCCESSFUL_COMMENT} from '../actions/like';

const comments = (
  state = {
    areFetching: true,
    error: false,
    postId: 0,
    items: [],
  },
  action,
) => {
  switch (action.type) {
    case START_COMMENTS_REQUEST:
      return {
        ...state,
        areFetching: true,
        error: false,
      };

    case COMMENTS_REQUEST_SUCCESSFUL:
      return {
        areFetching: false,
        error: false,
        postId: action.postId,
        items: action.comments.map(
          comment =>
            ({
              id: comment.id,
              body: comment.attributes.body,
              userUsername: comment.attributes.user_username,
              parentId: comment.attributes.parent_id,
              postId: comment.attributes.post_id,
              score: comment.attributes.score,
            })
        ),
      };

    case COMMENTS_REQUEST_FAILURE:
      return {
        ...state,
        areFetching: false,
        error: true,
      };

    case LIKE_SUCCESSFUL_COMMENT:
      return {
        ...state,
        items: state.items && state.items.map(comment => {
          if (comment.id == action.commentId) {
            if (action.score == 1) comment.score++;
            else if (action.score == -1) comment.score--;
            else if (action.score == 0 && action.pressedButton == -1) comment.score++;
            else if (action.score == 0 && action.pressedButton == 1) comment.score--;
          }
          return comment;
        }),
      };

    default:
      return state;
  }
}

export default comments;