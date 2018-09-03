import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import homeStyles from '../../../styles/homeStyles';

const MenuButton = ({text, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={homeStyles.menuButton}>{text}</Text>
  </TouchableOpacity>
);

export default MenuButton;