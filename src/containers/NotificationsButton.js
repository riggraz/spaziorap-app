import {connect} from 'react-redux';

import NotificationsButtonP from '../components/NotificationsButtonP';

import {fetchNotifications} from '../actions/requestNotifications';

const mapStateToProps = state =>
  ({
    numberOfNotifications: state.user.isLoggedIn ? state.user.notifications.items.length : 0,
    areFetching: state.user.notifications.areFetching,
    isLoggedIn: state.user.isLoggedIn,
    userId: state.user.isLoggedIn ? state.user.id : 0,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleNotificationsRefresh(userId) {
      dispatch(fetchNotifications(userId));
    },
  });

const NotificationsButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationsButtonP);

export default NotificationsButton;