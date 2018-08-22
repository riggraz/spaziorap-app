import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import formStyles from '../../styles/formStyles';

import {POSTS, REGISTRATION} from '../../constants/navigation';

class LoginFormP extends React.Component {

  constructor() {
    super();

    this.state = {
      usernameInputText: '',
      passwordInputText: '',
    };

    this._handleLogin = this._handleLogin.bind(this);
  }

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate(POSTS);
    }
  }

  _handleLogin() {
    const {usernameInputText, passwordInputText} = this.state;
    const {handleLogin} = this.props;

    handleLogin(usernameInputText, passwordInputText);
  }

  render() {
    return(
      <ScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={formStyles.center}
        style={formStyles.container}
      >
        <Text style={formStyles.label}>
          Nome utente
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
          Password
        </Text>
        <TextInput
            value={this.state.passwordInputText}
            onChangeText={passwordInputText => this.setState({passwordInputText})}
            onSubmitEditing={() => this._handleLogin()}
            placeholder='Inserisci qui la tua password'
            secureTextEntry
            underlineColorAndroid='white'
            style={formStyles.input}
        />

        <TouchableOpacity onPress={() => this._handleLogin()} style={formStyles.button}>
          <Text style={formStyles.buttonText}>Accedi</Text>
        </TouchableOpacity>

        {
          this.props.isLoggingIn ?
            <Text style={formStyles.label}>Sto accedendo...</Text>
          :
            null
        }
        {
          this.props.error ?
            <Text style={formStyles.redLabel}>Combinazione nome utente e password sbagliata.</Text>
          :
            null
        }

        <TouchableOpacity onPress={() => this.props.navigation.navigate(REGISTRATION)}>
          <Text style={formStyles.touchableText}>
            Non hai un account? Crealo subito.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default LoginFormP;