import {
  START_POSTS_REQUEST,
  POSTS_REQUEST_SUCCESSFUL,
  POSTS_REQUEST_FAILURE
} from '../actions/requestPosts';

const posts = (
  state = {
    areFetching: true,
    error: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case START_POSTS_REQUEST:
      return {
        ...state,
        areFetching: true,
      };

    case POSTS_REQUEST_SUCCESSFUL:
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
          createdAt: post.attributes.created_at.toString(),
        })),
      };

    case POSTS_REQUEST_FAILURE:
      return {
        areFetching: false,
        error: true,
        items: state.posts.items,
      };

    default:
      return state;
  }
}

export default posts;