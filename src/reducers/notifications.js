import {
  START_NOTIFICATIONS_REQUEST,
  NOTIFICATIONS_REQUEST_SUCCESSFUL,
  NOTIFICATIONS_REQUEST_FAILURE,
} from '../actions/requestNotifications';

const notifications = (
  state = {
    items: [],
    areFetching: false,
    error: false,
  },
  action,
) => {
  switch (action.type) {
    case START_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        areFetching: true,
        error: false,
      };

    case NOTIFICATIONS_REQUEST_SUCCESSFUL:
      return {
        ...state,
        items: action.notifications.map(notification => ({
          id: notification.id,
          senderId: notification.attributes.id,
          senderUsername: notification.attributes.sender_username,
          receiverId: notification.attributes.receiver_id,
          postId: notification.attributes.post_id,
          postBody: notification.attributes.post_body,
          read: notification.attributes.read,
          createdAt: notification.attributes.created_at.toString(),
        })),
        areFetching: false,
        error: false,
      };

    case NOTIFICATIONS_REQUEST_FAILURE:
      return {
        ...state,
        items: [],
        areFetching: false,
        error: true,
      };

    default:
      return state;
  }
};

export default notifications;