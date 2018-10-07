import React from 'react';

import NotificationsList from '../../containers/NotificationsList';

class NotificationsScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: 'notifiche',
  });

  render() {
    const {navigation} = this.props;

    return (
      <NotificationsList navigation={navigation} />
    );
  }
}

export default NotificationsScreen;