import {
  CHANGE_SELECTED_TOPIC,
  CHANGE_BODY,
  CHANGE_URL,
} from '../actions/changeNewPostForm';

const form = (
  state = {
    selectedTopic: 1,
    body: undefined,
    url: undefined,
  },
  action,
) => {
  switch (action.type) {
    case CHANGE_SELECTED_TOPIC:
      return {
        ...state,
        selectedTopic: action.topicId,
      };

    case CHANGE_BODY:
      return {
        ...state,
        body: action.body,
      };

    case CHANGE_URL:
      return {
        ...state,
        url: action.url,
      };

    default:
      return state;
  }
}

export default form;