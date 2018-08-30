import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import formStyles from '../../../styles/formStyles';

const TextPostSpecificField = ({value, handleChangeText}) =>
  <View>
    <Text style={formStyles.label}>
      Cosa vuoi dire?
    </Text>
    <TextInput
      value={value}
      onChangeText={text => handleChangeText(`body~${text}`)}
      multiline
      numberOfLines={1}
      underlineColorAndroid='white'
      placeholder='Cosa vuoi dire?'
      style={[formStyles.input, formStyles.multilineInput]}
    />
  </View>

export default TextPostSpecificField;