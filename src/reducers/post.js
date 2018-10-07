import {
  POST_REQUEST_SUCCESSFUL,
} from '../actions/requestPost';

const post = (
  state = {
    body: '',
    commentsCount: 0,
    createdAt: '',
    id: 0,
    score: 0,
    topicId: 0,
    url: '',
    userId: 0,
    userUsername: '',
  },
  action,
) => {
  switch (action.type) {
    case POST_REQUEST_SUCCESSFUL:
      return {
        body: action.post.attributes.body,
        commentsCount: action.post.attributes.comments_count,
        createdAt: action.post.attributes.created_at.toString(),
        id: action.post.id,
        score: action.post.attributes.score,
        topicId: action.post.attributes.topic_id.toString(),
        url: action.post.attributes.url,
        userId: action.post.attributes.user_id,
        userUsername: action.post.attributes.user_username,
      };

    default:
      return state;
  }
}

export default post;