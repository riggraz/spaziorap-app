import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import newPostButtonStyles from '../../styles/newPostButtonStyles';

const NewPostButton = ({title, emoji, handlePress}) =>
  <TouchableOpacity onPress={handlePress} style={newPostButtonStyles.container}>
    <View>
      <Text style={newPostButtonStyles.title}>{title}</Text>
      <Text style={newPostButtonStyles.emoji}>{emoji}</Text>
    </View>
  </TouchableOpacity>

export default NewPostButton;