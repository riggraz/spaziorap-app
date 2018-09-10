import React from 'react';
import {
  TextInput,
} from 'react-native';

import formStyles from '../../../styles/formStyles';

const VideoPostSpecificField = ({value, handleChangeText}) => (
  <TextInput
    value={value}
    placeholder='Copia link a video YouTube'
    onChangeText={text => handleChangeText(text)}
    underlineColorAndroid='white'
    style={formStyles.input}
  />
);

export default VideoPostSpecificField;