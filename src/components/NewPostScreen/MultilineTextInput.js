import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import formStyles from '../../styles/formStyles';

/*
  Questo componenente non è stateless perché altrimenti non sarebbe
  possibile selezionare del testo. Un workaround è quello di impostare
  la width al 99% e poi cambiarla, subito dopo, a 100%. In questo modo
  il testo diventa selezionabile. Per fare ciò, però, è necessario
  usare lo stato e quindi rendere il componente stateful.
*/

class MultilineTextInput extends React.Component {
  constructor() {
    super();

    this.state = {
      textInputWidth: '99%',
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({textInputWidth: '100%'}), 1);
  }

  render() {
    const {value, handleChangeText} = this.props;

    return (
      <TextInput
        value={value}
        onChangeText={text => handleChangeText(text)}
        multiline
        underlineColorAndroid='white'
        placeholder='Cosa vuoi dire?'
        style={[{width: this.state.textInputWidth}, formStyles.multilineInput]}
      />
    );
  }
}

export default MultilineTextInput;