import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import formStyles from '../../../styles/global/formStyles';

const TextPostSpecificField = ({value, handleChangeText}) =>
  <View>
    <Text style={formStyles.label}>
      Cosa vuoi dire?
    </Text>
    <TextInput
      value={value}
      onChangeText={text => handleChangeText(`body:${text}`)}
      multiline
      numberOfLines={8}
      underlineColorAndroid='white'
      style={[formStyles.input, {width: 300, textAlignVertical: "top",}]}
    />
  </View>

export default TextPostSpecificField;