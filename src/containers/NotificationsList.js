import {connect} from 'react-redux';

import NotificationsListP from '../components/NotificationsScreen/NotificationsListP';

import {setCurrentPostId} from '../actions/setCurrentPostId';
import {fetchPost} from '../actions/requestPost';
import {fetchComments} from '../actions/requestComments';

const mapStateToProps = state =>
  ({
    notifications: state.user.notifications.items,
    areFetching: state.user.notifications.areFetching,
    error: state.user.notifications.error,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleNotificationPress(postId) {
      dispatch(setCurrentPostId(postId));
      dispatch(fetchPost(postId));
      dispatch(fetchComments(postId));
    },
  });

const NotificationsList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsListP);

export default NotificationsList;