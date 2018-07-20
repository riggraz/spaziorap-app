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

import postsByTopic from './postsByTopic';

const posts = (
  state = {
    latest: {},
    selectedTopic: {},
  },
  action
) => {
  switch (action.type) {
    case START_LATEST_POSTS_REQUEST:
    case LATEST_POSTS_REQUEST_SUCCESSFUL:
    case LATEST_POSTS_REQUEST_FAILURE:
      return {
        latest: postsByTopic(state.latest, action),
        selectedTopic: state.selectedTopic,
      };

    case START_POSTS_REQUEST:
    case POSTS_REQUEST_SUCCESSFUL:
    case POSTS_REQUEST_FAILURE:
      return {
        latest: state.latest,
        selectedTopic: postsByTopic(state.selectedTopic, action),
      };

    default:
      return state;
  }
};

export default posts;