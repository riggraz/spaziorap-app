import {SET_CURRENT_POST_ID} from '../actions/setCurrentPostId';

import {
  START_COMMENTS_REQUEST,
  COMMENTS_REQUEST_SUCCESSFUL,
  COMMENTS_REQUEST_FAILURE,
} from '../actions/requestComments';

import {LIKE_SUCCESSFUL_COMMENT} from '../actions/like';

import {
  START_COMMENT_SUBMISSION,
  COMMENT_SUBMISSION_SUCCESSFUL,
  COMMENT_SUBMISSION_FAILURE,
} from '../actions/submitComment';

import comments from './comments';
import newComment from './newComment';

const currentPost = (
  state = {
    id: 0,
    comments: comments(undefined, {}),
    newComment: newComment(undefined, {}),
  },
  action,
) => {
  switch (action.type) {
    case SET_CURRENT_POST_ID:
      return {
        ...state,
        id: action.id,
      };

    case START_COMMENTS_REQUEST:
    case COMMENTS_REQUEST_SUCCESSFUL:
    case COMMENTS_REQUEST_FAILURE:
    case LIKE_SUCCESSFUL_COMMENT:
      return {
        ...state,
        comments: comments(state.comments, action),
      };

    case START_COMMENT_SUBMISSION:
    case COMMENT_SUBMISSION_SUCCESSFUL:
    case COMMENT_SUBMISSION_FAILURE:
      return {
        ...state,
        newComment: newComment(state.newComment, action),
      };

    default:
      return state;
  }
}

export default currentPost;