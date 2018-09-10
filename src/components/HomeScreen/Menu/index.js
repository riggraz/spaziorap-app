import React from 'react';
import {View} from 'react-native';

import MenuButton from './MenuButton';

import {NEW_POST, POSTS} from '../../../constants/navigation';

import homeStyles from '../../../styles/homeStyles';

const Menu = ({navigation}) => (
  <View style={homeStyles.menu}>
    <MenuButton text='➕ Nuovo'
      onPress={() => navigation.navigate(NEW_POST)}
    />
    <MenuButton text='💬 Leggi'
      onPress={() => navigation.navigate(POSTS)}
    />
  </View>
);

export default Menu;