import React from 'react';
import {
  FlatList,
  ActivityIndicator,
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

  handleNotificationPress,

  navigation,
}) => (
  !areFetching ?
    <FlatList
      data={notifications}

      renderItem={({item}) => (
        <NotificationsListItem
          senderUsername={item.senderUsername}
          postId={item.postId}
          read={item.read}
          postBody={item.postBody}
          createdAt={item.createdAt}

          handlePress={() => {
            handleNotificationPress(item.postId);
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