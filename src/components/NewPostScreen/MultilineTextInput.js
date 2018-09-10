import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import formStyles from '../../styles/formStyles';

const MultilineTextInput = ({value, handleChangeText}) => (
  <TextInput
    value={value}
    onChangeText={text => handleChangeText(text)}
    multiline
    underlineColorAndroid='white'
    placeholder='Cosa vuoi dire?'
    style={[formStyles.input, formStyles.multilineInput]}
  />
);

export default MultilineTextInput;