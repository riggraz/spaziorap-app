import {connect} from 'react-redux';

import NotificationsListP from '../components/NotificationsScreen/NotificationsListP';

import {markNotificationAsRead} from '../actions/markNotificationAsRead';
import {setCurrentPostId} from '../actions/setCurrentPostId';
import {fetchPost} from '../actions/requestPost';
import {fetchComments} from '../actions/requestComments';
import {fetchNotifications} from '../actions/requestNotifications';

const mapStateToProps = state =>
  ({
    notifications: state.user.notifications.items,
    areFetching: state.user.notifications.areFetching,
    error: state.user.notifications.error,

    loggedUserId: state.user.isLoggedIn ? state.user.id : 0,
    accessToken: state.user.isLoggedIn ? state.user.accessToken : '',
  });

const mapDispatchToProps = dispatch =>
  ({
    handleMarkNotificationAsRead(notificationId, accessToken) {
      dispatch(markNotificationAsRead(notificationId, accessToken));
    },

    handleFetchNotificationPost(postId) {
      dispatch(setCurrentPostId(postId));
      dispatch(fetchPost(postId));
      dispatch(fetchComments(postId));
    },

    handleNotificationsRefresh(userId) {
      if (userId !== 0) dispatch(fetchNotifications(userId));
    },
  });

const NotificationsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsListP);

export default NotificationsList;