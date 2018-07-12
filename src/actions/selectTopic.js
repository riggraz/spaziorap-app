export const SELECT_TOPIC = 'SELECT_TOPIC';

export const selectTopic = topic =>
  ({
    type: SELECT_TOPIC,
    topic,
  });