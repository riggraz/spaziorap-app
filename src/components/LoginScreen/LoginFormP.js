import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import {LOGIN_FAILURE} from '../../actions/login';

import globalStyles from '../../styles/globalStyles';
import formStyles from '../../styles/formStyles';

import {HOME, REGISTRATION} from '../../constants/navigation';

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
      this.props.navigation.navigate(HOME);
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
        style={globalStyles.container}
      >
        <Text style={formStyles.label}>
          nome utente
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
          password
        </Text>
        <TextInput
            value={this.state.passwordInputText}
            onChangeText={passwordInputText => this.setState({passwordInputText})}
            onSubmitEditing={() => this._handleLogin()}
            secureTextEntry
            underlineColorAndroid='white'
            style={[formStyles.input, formStyles.inputCenterText]}
        />

        <TouchableOpacity onPress={() => this._handleLogin()} style={formStyles.button}>
          <Text style={formStyles.buttonText}>
            {
              this.props.isLoggingIn ?
                'accedendo...'
              :
                'accedi'
            }
          </Text>
        </TouchableOpacity>

        {
          this.props.error === LOGIN_FAILURE ?
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