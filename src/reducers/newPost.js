import {
  START_POST_SUBMISSION,
  POST_SUBMISSION_SUCCESSFUL,
  POST_SUBMISSION_FAILURE,
} from '../actions/submitPost';

const newPost = (
  state = {
    isSubmitting: false,
    hasSubmitted: false,
    error: false,
    
    id: undefined,
  },
  action
) => {
  switch (action.type) {
    case START_POST_SUBMISSION:
      return {
        isSubmitting: true,
        hasSubmitted: false,
        error: false,

        id: state.id,
      };

    case POST_SUBMISSION_SUCCESSFUL:
      return {
        isSubmitting: false,
        hasSubmitted: true,
        error: false,

        id: action.post.id,
      };

    case POST_SUBMISSION_FAILURE:
      return {
        isSubmitting: false,
        hasSubmitted: false,
        error: true,

        id: state.id,
      };
  }
}

export default newPost;