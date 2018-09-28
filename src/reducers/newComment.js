import {
  START_COMMENT_SUBMISSION,
  COMMENT_SUBMISSION_SUCCESSFUL,
  COMMENT_SUBMISSION_FAILURE,
} from '../actions/submitComment';

const newComment = (
  state = {
    isSubmitting: false,
    hasSubmitted: false,
    error: false,
  },
  action,
) => {
  switch (action.type) {
    case START_COMMENT_SUBMISSION:
      return {
        isSubmitting: true,
        hasSubmitted: false,
        error: false,
      };

    case COMMENT_SUBMISSION_SUCCESSFUL:
      return {
        isSubmitting: false,
        hasSubmitted: true,
        error: false,
      };

    case COMMENT_SUBMISSION_FAILURE:
      return {
        isSubmitting: false,
        hasSubmitted: false,
        error: true,
      };

    default:
      return state;
  }
}

export default newComment;