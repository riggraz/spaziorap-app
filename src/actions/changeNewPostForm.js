export const CHANGE_SELECTED_TOPIC = 'CHANGE_SELECTED_TOPIC';
export const changeSelectedTopic = topicId =>
  ({
    type: CHANGE_SELECTED_TOPIC,
    topicId,
  });

export const CHANGE_BODY = 'CHANGE_BODY';
export const changeBody = body =>
  ({
    type: CHANGE_BODY,
    body,
  });

export const CHANGE_URL = 'CHANGE_URL';
export const changeUrl = url =>
  ({
    type: CHANGE_URL,
    url,
  });