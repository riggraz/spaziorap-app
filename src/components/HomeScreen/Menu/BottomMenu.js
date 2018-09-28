import React from 'react';
import {View, Linking} from 'react-native';

import MenuButton from './MenuButton';

import {INFO} from '../../../constants/navigation';

import homeStyles from '../../../styles/homeStyles';

const BottomMenu = ({navigation}) => (
  <View style={homeStyles.menu}>
    <MenuButton text='📛 segnala'
      onPress={
        () => Linking.openURL('mailto:spaziorapbusiness@gmail.com?subject=Segnalazione&body=Cosa vuoi segnalare?')
      }
    />
    <MenuButton text='💼 info'
      onPress={() => navigation.navigate(INFO)}
    />
  </View>
);

export default BottomMenu;