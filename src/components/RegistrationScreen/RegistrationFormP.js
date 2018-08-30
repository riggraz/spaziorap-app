import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import formStyles from '../../styles/formStyles';

import {HOME, LOGIN} from '../../constants/navigation';

class RegistrationFormP extends React.Component {

  constructor() {
    super();

    this.state = {
      usernameInputText: '',
      emailInputText: undefined,
      passwordInputText: '',
      passwordConfirmationInputText: '',
      error: false,
    };
  }

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate(HOME);
    }
  }

  _handleRegistration = () => {
    const {
      usernameInputText,
      emailInputText,
      passwordInputText,
      passwordConfirmationInputText,
    } = this.state;
    const {handleRegistration} = this.props;

    if (
      this._isUsernameOkay() &&
      this._isPasswordOkay() &&
      this._passwordsMatch()
    ) {
      this.setState({error: false});
      handleRegistration(usernameInputText, emailInputText, passwordInputText);
    } else {
      this.setState({error: true});
    }
  }

  _isUsernameOkay = () => {
    const {usernameInputText} = this.state;
    return usernameInputText.length >= 3;
  }

  _isPasswordOkay = () => {
    const {passwordInputText} = this.state;
    return passwordInputText.length >= 6;
  }

  _passwordsMatch = () => {
    const {passwordInputText, passwordConfirmationInputText} = this.state;
    return ((passwordInputText === passwordConfirmationInputText) && this._isPasswordOkay());
  }

  render() {
    return(
      <ScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={formStyles.center}
        style={formStyles.container}
      >
        <Text style={formStyles.label}>
          Nome utente (3+ caratteri) {this._isUsernameOkay() ? '✔️' : '✖️'}
        </Text>
        <TextInput
            value={this.state.usernameInputText}
            onChangeText={usernameInputText => this.setState({usernameInputText})}
            autoFocus
            placeholder='Inserisci qui il tuo nome utente'
            autoCapitalize='none'
            autoCorrect={false}
            underlineColorAndroid='white'
            style={formStyles.input}
        />

        <Text style={formStyles.label}>
          Password (6+ caratteri) {this._isPasswordOkay() ? '✔️' : '✖️'}
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
          Conferma password {this._passwordsMatch() ? '✔️' : '✖️'}
        </Text>
        <TextInput
            value={this.state.passwordConfirmationInputText}
            onChangeText={passwordConfirmationInputText => this.setState({passwordConfirmationInputText})}
            onSubmitEditing={() => this._handleRegistration()}
            placeholder='Conferma qui la tua password'
            secureTextEntry
            underlineColorAndroid='white'
            style={formStyles.input}
        />

        <TouchableOpacity onPress={() => this._handleRegistration()} style={formStyles.button}>
          <Text style={formStyles.buttonText}>
          {
            this.props.isLoggingIn ?
              'Registrando...'
            :
              'Registrati'
          }
          </Text>
        </TouchableOpacity>

        {
          this.state.error ?
            <Text style={formStyles.redLabel}>Ci sono errori nella compilazione.</Text>
              // this._isUsernameOkay() ? null : <Text>Il nome utente deve essere di 3 o più caratteri</Text>
              // this._isPasswordOkay() ? null : <Text>La password deve essere di 6 o più caratteri</Text>
              // this._passwordsMatch() ? null : <Text>La password e la conferma password devono coincidere</Text>
          :
            null
        }
        
        {
          this.props.error ?
            <Text style={formStyles.redLabel}>Il nome utente '{this.state.usernameInputText}'' è già stato preso.</Text>
          :
            null
        }

        <TouchableOpacity onPress={() => this.props.navigation.navigate(LOGIN)}>
          <Text style={formStyles.touchableText}>
            Hai già un account? Accedi subito.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default RegistrationFormP;