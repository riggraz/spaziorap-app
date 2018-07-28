import {
  START_LATEST_POSTS_REQUEST,
  LATEST_POSTS_REQUEST_SUCCESSFUL,
  LATEST_POSTS_REQUEST_FAILURE,
} from '../actions/requestLatestPosts';

import {
  START_POSTS_REQUEST,
  POSTS_REQUEST_SUCCESSFUL,
  POSTS_REQUEST_FAILURE,
} from '../actions/requestPosts';

import {
  START_PROFILE_POSTS_REQUEST,
  PROFILE_POSTS_REQUEST_SUCCESSFUL,
  PROFILE_POSTS_REQUEST_FAILURE,
} from '../actions/requestProfilePosts';

import postsBranch from './postsBranch';

const posts = (
  state = {
    latest: {},
    selectedTopic: {},
    profile: {},
  },
  action,
) => {
  switch (action.type) {
    case START_LATEST_POSTS_REQUEST:
    case LATEST_POSTS_REQUEST_SUCCESSFUL:
    case LATEST_POSTS_REQUEST_FAILURE:
      return {
        ...state,
        latest: postsBranch(state.latest, action),
      };

    case START_POSTS_REQUEST:
    case POSTS_REQUEST_SUCCESSFUL:
    case POSTS_REQUEST_FAILURE:
      return {
        ...state,
        selectedTopic: postsBranch(state.selectedTopic, action),
      };

    case START_PROFILE_POSTS_REQUEST:
    case PROFILE_POSTS_REQUEST_SUCCESSFUL:
    case PROFILE_POSTS_REQUEST_FAILURE:
      return {
        ...state,
        profile: postsBranch(state.profile, action),
      };

    default:
      return state;
  }
};

export default posts;