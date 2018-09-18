import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import {REGISTRATION_FAILURE} from '../../actions/register';

import globalStyles from '../../styles/globalStyles';
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

  _renderErrors = () => (
  <View>
    <Text style={formStyles.redLabel}>Ci sono errori nella compilazione.</Text>
    { this._isUsernameOkay() ? null : <Text>Il nome utente dev'essere compreso tra 3 e 32 caratteri.</Text> }
    { this._isPasswordOkay() ? null : <Text>La password dev'essere di 6 o più caratteri.</Text> }
    { this._passwordsMatch() ? null : <Text>La password e la conferma password devono coincidere.</Text> }
  </View>
);

  render() {
    return(
      <ScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={formStyles.center}
        style={globalStyles.container}
      >
        <Text style={formStyles.label}>
          nome utente (3+ caratteri) {this._isUsernameOkay() ? '✔️' : '✖️'}
        </Text>
        <TextInput
            value={this.state.usernameInputText}
            onChangeText={usernameInputText => this.setState({usernameInputText})}
            autoCapitalize='none'
            autoCorrect={false}
            underlineColorAndroid='white'
            style={[formStyles.input, formStyles.inputCenterText]}
        />

        <Text style={formStyles.label}>
          password (6+ caratteri) {this._isPasswordOkay() ? '✔️' : '✖️'}
        </Text>
        <TextInput
            value={this.state.passwordInputText}
            onChangeText={passwordInputText => this.setState({passwordInputText})}
            secureTextEntry
            underlineColorAndroid='white'
            style={[formStyles.input, formStyles.inputCenterText]}
        />

        <Text style={formStyles.label}>
          conferma password {this._passwordsMatch() ? '✔️' : '✖️'}
        </Text>
        <TextInput
            value={this.state.passwordConfirmationInputText}
            onChangeText={passwordConfirmationInputText => this.setState({passwordConfirmationInputText})}
            onSubmitEditing={() => this._handleRegistration()}
            secureTextEntry
            underlineColorAndroid='white'
            style={[formStyles.input, formStyles.inputCenterText]}
        />

        <TouchableOpacity onPress={() => this._handleRegistration()} style={formStyles.button}>
          <Text style={formStyles.buttonText}>
          {
            this.props.isLoggingIn ?
              'registrando...'
            :
              'registrati'
          }
          </Text>
        </TouchableOpacity>

        {
          this.state.error ?
            this._renderErrors()
          :
            null
        }
        
        {
          this.props.error === REGISTRATION_FAILURE ?
            <Text style={formStyles.redLabel}>Il nome utente '{this.state.usernameInputText}' è già stato preso.</Text>
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