import React from 'react';
import {
  ScrollView,
} from 'react-native';

import NewPostButton from './NewPostButton';

import {
  NEW_TEXT_POST,
  NEW_YT_POST,

  LOGIN,
} from '../../constants/navigation';

const NewPostMenuP = ({isLoggedIn, navigation}) => (
  <ScrollView>
    <NewPostButton
      title='TESTO'
      emoji='📃'
      handlePress={() => navigation.navigate(isLoggedIn ? NEW_TEXT_POST : LOGIN)}
    />

    <NewPostButton
      title='VIDEO YOUTUBE'
      emoji='🎬'
      handlePress={() => navigation.navigate(isLoggedIn ? NEW_YT_POST : LOGIN)}
    />
  </ScrollView>
);

export default NewPostMenuP;