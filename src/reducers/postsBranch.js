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

import {LIKE_SUCCESSFUL_POST} from '../actions/like';

const postsBranch = (
  state = {
    areFetching: true,
    error: false,
    page: 1,
    endReached: false,
    items: [],
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
        page: action.page,
      };

    case LATEST_POSTS_REQUEST_SUCCESSFUL:
    case POSTS_REQUEST_SUCCESSFUL:
    case PROFILE_POSTS_REQUEST_SUCCESSFUL:
      if (action.posts.length === 0) {
        return {
          ...state,
          //solve profile with no post bug
          items: action.page === 1 ? [] : state.items,
          areFetching: false,
          endReached: true,
        };
      }

      if (action.page === 1) {
        return {
          areFetching: false,
          error: false,
          page: 1,
          endReached: false,
          items: action.posts.map(post => ({
            id: post.id,
            body: post.attributes.body,
            url: post.attributes.url,
            userId: post.attributes.user_id,
            userUsername: post.attributes.user_username,
            topicId: post.attributes.topic_id.toString(),
            score: post.attributes.score,
            commentsCount: post.attributes.comments_count,
            createdAt: post.attributes.created_at.toString(),
          })),
        };
      } else {
        return {
          areFetching: false,
          error: false,
          page: action.page,
          endReached: false,
          items: [...state.items, ...action.posts.map(post => ({
            id: post.id,
            body: post.attributes.body,
            url: post.attributes.url,
            userId: post.attributes.user_id,
            userUsername: post.attributes.user_username,
            topicId: post.attributes.topic_id.toString(),
            score: post.attributes.score,
            commentsCount: post.attributes.comments_count,
            createdAt: post.attributes.created_at.toString(),
          }))],
        };
      }

    case LATEST_POSTS_REQUEST_FAILURE:
    case POSTS_REQUEST_FAILURE:
    case PROFILE_POSTS_REQUEST_FAILURE:
      return {
        ...state,
        areFetching: false,
        error: true,
        items: state.items,
      };

    case LIKE_SUCCESSFUL_POST:
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