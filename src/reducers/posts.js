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

import {
  LATEST_BRANCH,
  SELECTEDTOPIC_BRANCH,
  PROFILE_BRANCH,
} from '../constants/branches';

import { LIKE_SUCCESSFUL } from '../actions/like';

const posts = (
  state = {
    [LATEST_BRANCH]: {},
    [SELECTEDTOPIC_BRANCH]: {},
    [PROFILE_BRANCH]: {},
  },
  action,
) => {
  switch (action.type) {
    case START_LATEST_POSTS_REQUEST:
    case LATEST_POSTS_REQUEST_SUCCESSFUL:
    case LATEST_POSTS_REQUEST_FAILURE:
      return {
        ...state,
        [LATEST_BRANCH]: postsBranch(state[LATEST_BRANCH], action),
      };

    case START_POSTS_REQUEST:
    case POSTS_REQUEST_SUCCESSFUL:
    case POSTS_REQUEST_FAILURE:
      return {
        ...state,
        [SELECTEDTOPIC_BRANCH]: postsBranch(state[SELECTEDTOPIC_BRANCH], action),
      };

    case START_PROFILE_POSTS_REQUEST:
    case PROFILE_POSTS_REQUEST_SUCCESSFUL:
    case PROFILE_POSTS_REQUEST_FAILURE:
      return {
        ...state,
        [PROFILE_BRANCH]: postsBranch(state[PROFILE_BRANCH], action),
      };

    case LIKE_SUCCESSFUL:
      return {
        [LATEST_BRANCH]: postsBranch(state[LATEST_BRANCH], action),
        [SELECTEDTOPIC_BRANCH]: postsBranch(state[SELECTEDTOPIC_BRANCH], action),
        [PROFILE_BRANCH]: postsBranch(state[PROFILE_BRANCH], action),
      }

    default:
      return state;
  }
};

export default posts;