import {
  RESET_POST_SUBMISSION,
  START_POST_SUBMISSION,
  POST_SUBMISSION_SUCCESSFUL,
  POST_SUBMISSION_FAILURE,
} from '../actions/submitPost';

import {SELECT_POST_TYPE} from '../actions/selectPostType';

import {
  CHANGE_SELECTED_TOPIC,
  CHANGE_BODY,
  CHANGE_URL,
} from '../actions/changeNewPostForm';

import {
  TEXT_POST,
  VIDEO_POST,
} from '../constants/postTypes';

import form from './newPostForm';

const defaultState = {
  postType: TEXT_POST,
  form: form(undefined, {}),

  isSubmitting: false,
  hasSubmitted: false,
  error: false,
  
  id: undefined,
};

const newPost = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case RESET_POST_SUBMISSION:
      return defaultState;

    case START_POST_SUBMISSION:
      return {
        ...state,
        isSubmitting: true,
        hasSubmitted: false,
        error: false,
      };

    case POST_SUBMISSION_SUCCESSFUL:
      return {
        ...state,
        isSubmitting: false,
        hasSubmitted: true,
        error: false,
        id: action.post.id,
      };

    case POST_SUBMISSION_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        hasSubmitted: false,
        error: true,
      };

    case SELECT_POST_TYPE:
      return {
        ...state,
        postType: action.postType,
      };

    case CHANGE_SELECTED_TOPIC:
    case CHANGE_BODY:
    case CHANGE_URL:
      return {
        ...state,
        form: form(state.form, action),
      };

    default:
      return state;
  }
}

export default newPost;