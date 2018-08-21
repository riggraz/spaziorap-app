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

import {LIKE_SUCCESSFUL} from '../actions/like';

const postsBranch = (
  state = {
    areFetching: true,
    error: false,
    items: []
  },
  action,
) => {
  switch (action.type) {
    case START_LATEST_POSTS_REQUEST:
    case START_POSTS_REQUEST:
    case START_PROFILE_POSTS_REQUEST:
      return {
        ...state,
        areFetching: true,
      };

    case LATEST_POSTS_REQUEST_SUCCESSFUL:
    case POSTS_REQUEST_SUCCESSFUL:
    case PROFILE_POSTS_REQUEST_SUCCESSFUL:
      return {
        areFetching: false,
        error: false,
        items: action.posts.map(post => ({
          id: post.id,
          title: post.attributes.title,
          body: post.attributes.body,
          url: post.attributes.url,
          userId: post.attributes.user_id,
          userUsername: post.attributes.user_username,
          topicId: post.attributes.topic_id.toString(),
          score: post.attributes.score,
          createdAt: post.attributes.created_at.toString(),
        })),
      };

    case LATEST_POSTS_REQUEST_FAILURE:
    case POSTS_REQUEST_FAILURE:
    case PROFILE_POSTS_REQUEST_FAILURE:
      return {
        areFetching: false,
        error: true,
        items: state.items,
      };

    case LIKE_SUCCESSFUL:
      return {
        ...state,
        items: state.items && state.items.map(post => {
          if (post.id == action.postId) {
            if (action.score == 1) post.score++;
            else if (action.score == -1) post.score--;
            else if (action.score == 0 && action.pressedButton == -1) post.score++;
            else if (action.score == 0 && action.pressedButton == 1) post.score--;
          }
          return post;
        }),
      };

    default:
      return state;
  }
}

export default postsBranch;