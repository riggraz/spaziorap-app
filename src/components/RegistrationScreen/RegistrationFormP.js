import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import formStyles from '../../styles/global/formStyles';

import {HOME, LOGIN} from '../../constants/navigation';

class RegistrationFormP extends React.Component {

  constructor() {
    super();

    this.state = {
      usernameInputText: '',
      emailInputText: undefined,
      passwordInputText: '',
      passwordConfirmationInputText: '',
      passwordDoesntMatch: false,
    };

    this._handleRegistration = this._handleRegistration.bind(this);
  }

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate(HOME);
    }
  }

  _handleRegistration() {
    const {
      usernameInputText,
      emailInputText,
      passwordInputText,
      passwordConfirmationInputText,
    } = this.state;
    const {handleRegistration} = this.props;

    if (passwordInputText === passwordConfirmationInputText) {
      this.setState({passwordDoesntMatch: false});
      handleRegistration(usernameInputText, emailInputText, passwordInputText);
    } else {
      this.setState({passwordDoesntMatch: true});
    }
  }

  render() {
    return(
      <View style={formStyles.container}>
        <Text style={formStyles.label}>
          Nome utente
        </Text>
        <TextInput
            value={this.state.usernameInputText}
            onChangeText={usernameInputText => this.setState({usernameInputText})}
            placeholder='Inserisci qui il tuo nome utente'
            autoCapitalize='none'
            autoCorrect={false}
            underlineColorAndroid='white'
            style={formStyles.input}
        />

        <Text style={formStyles.label}>
          Password
        </Text>
        <TextInput
            value={this.state.passwordInputText}
            onChangeText={passwordInputText => this.setState({passwordInputText})}
            placeholder='Inserisci qui la tua password'
            secureTextEntry
            underlineColorAndroid='white'
            style={formStyles.input}
        />

        <Text style={formStyles.label}>
          Conferma password
        </Text>
        <TextInput
            value={this.state.passwordConfirmationInputText}
            onChangeText={passwordConfirmationInputText => this.setState({passwordConfirmationInputText})}
            placeholder='Conferma qui la tua password'
            secureTextEntry
            underlineColorAndroid='white'
            style={formStyles.input}
        />

        <TouchableOpacity onPress={() => this._handleRegistration()} style={formStyles.button}>
          <Text style={formStyles.buttonText}>Registrati</Text>
        </TouchableOpacity>

        {
          this.props.isLoggingIn ?
            <Text style={formStyles.label}>Sto registrando...</Text>
          :
            null
        }
        {
          this.props.error ?
            <Text style={formStyles.redLabel}>Si è verificato un errore nella registrazione.</Text>
          :
            null
        }
        {
          this.state.passwordDoesntMatch ?
            <Text style={formStyles.redLabel}>Le password non coincidono.</Text>
          :
            null
        }

        <TouchableOpacity onPress={() => this.props.navigation.navigate(LOGIN)}>
          <Text style={formStyles.touchableText}>
            Hai già un account? Accedi subito.
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default RegistrationFormP;