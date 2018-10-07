import {POST_REQUEST_SUCCESSFUL,} from '../actions/requestPost';

import {LIKE_SUCCESSFUL_POST} from '../actions/like';

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

    case LIKE_SUCCESSFUL_POST:
      let score = state.score;

      if (action.score == 1) score++;
      else if (action.score == -1) score--;
      else if (action.score == 0 && action.pressedButton == -1) score++;
      else if (action.score == 0 && action.pressedButton == 1) score--;

      return {
        ...state,
        score,
      };

    default:
      return state;
  }
}

export default post;