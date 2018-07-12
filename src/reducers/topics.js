import {
  SELECT_TOPIC
} from '../actions/selectTopic';

const topics = (
  state = {
    selectedTopic: 'recent',
    items: [],
  },
  action
) => {
  switch (action.type) {
    case SELECT_TOPIC:
      return {
        ...state,
        selectedTopic: action.topic,
      };

    default:
      return state;
  }
}

export default topics;