import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import formStyles from '../../../styles/formStyles';

const YTPostSpecificField = ({value, handleChangeText}) =>
  <View>
    <Text style={formStyles.label}>
      Link a video YouTube
    </Text>
    <TextInput
      value={value}
      placeholder='Inserisci qui il link a YT'
      onChangeText={text => handleChangeText(`url~${text}`)}
      underlineColorAndroid='white'
      style={[formStyles.input, {width: 300}]}
    />
  </View>

export default YTPostSpecificField;