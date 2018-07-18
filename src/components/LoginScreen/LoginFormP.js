import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import formStyles from '../../styles/global/formStyles';

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
      this.setState({
        usernameInputText: '',
        passwordInputText: '',
      });
      this.props.navigation.navigate('Posts');
    }
  }

  _handleLogin() {
    const {usernameInputText, passwordInputText} = this.state;
    const {handleLogin} = this.props;

    handleLogin(usernameInputText, passwordInputText);
    // handleLogin('ricco', 'password');
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

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
          <Text style={formStyles.touchableText}>
            Non hai un account? Crealo subito.
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginFormP;