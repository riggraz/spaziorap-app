import React from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
} from 'react-native';

import NotificationsListItem from './NotificationsListItem';

import globalStyles from '../../styles/globalStyles';

import {SINGLE_POST} from '../../constants/navigation';
import {MAIN_COLOR} from '../../constants/colors';

import getBranch from '../../helpers/getBranch';

const NotificationsListP = ({
  notifications,
  areFetching,
  error,

  handleMarkNotificationAsRead,
  handleFetchNotificationPost,
  handleNotificationsRefresh,

  loggedUserId,
  accessToken,

  navigation,
}) => (
  !areFetching ?
    <FlatList
      data={notifications}

      refreshControl={
        <RefreshControl
          refreshing={areFetching}
          onRefresh={() => handleNotificationsRefresh(loggedUserId)}
        />
      }

      ListHeaderComponent={ () => {
        const n = notifications.reduce((n=0, notification) => (notification.read ? n : n+1), 0);

        return (
          <View style={globalStyles.box}>
            <Text style={styles.infoText}>
            {
              n + ' ' +
              'notific' + (n === 1 ? 'a' : 'he') + ' ' +
              'da leggere'
            }
            </Text>
            <TouchableOpacity
              onPress={() =>
                notifications.reverse().map(notification => (
                  (!notification.read) ?
                      handleMarkNotificationAsRead(notification.id, accessToken)
                    :
                      null    
              ))}
            >
              <Text style={{textAlign: 'center'}}>segna tutte come lette</Text>
            </TouchableOpacity>
          </View>
        );
      }}
      renderItem={({item}) => (
        <NotificationsListItem
          senderUsername={item.senderUsername}
          postId={item.postId}
          read={item.read}
          postBody={item.postBody}
          createdAt={item.createdAt}

          handlePress={() => {
            handleMarkNotificationAsRead(item.id, accessToken);
            handleFetchNotificationPost(item.postId);
            navigation.navigate(
              SINGLE_POST,
              {
                postId: item.postId,
                postTitle: item.postBody,
                branch: getBranch(),
              },
            );
          }}
        />
      )}

      keyExtractor={notification => notification.id}

      style={globalStyles.container}
    />
  :
    <ActivityIndicator size='large' color={MAIN_COLOR} />
);

export default NotificationsListP;

const styles = StyleSheet.create({
  infoText: {
    fontSize: 24,
    textAlign: 'center',
  },
});