import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

class LoginFormPresentational extends React.Component {

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
      this.props.navigation.navigate('Posts');
    }
  }

  _handleLogin() {
    const {usernameInputText, passwordInputText} = this.state;
    const {handleLogin} = this.props;

    handleLogin(usernameInputText, passwordInputText);
    // handleLogin('riccardo.graziosi97@gmail.com', 'password');
  }

  render() {
    return(
      <View>
        <Text>Nome utente:</Text>
        <TextInput
            value={this.state.usernameInputText}
            onChangeText={usernameInputText => this.setState({usernameInputText})}
            placeholder='Inserisci qui il tuo nome utente'
            autoCapitalize='none'
            autoCorrect={false}
        />

        <Text>Password:</Text>
        <TextInput
            value={this.state.passwordInputText}
            onChangeText={passwordInputText => this.setState({passwordInputText})}
            placeholder='Type your password...'
            secureTextEntry
        />

        <Button
          title='Login'
          onPress={() => this._handleLogin()}
        />

        {
          this.props.isLoggingIn ?
            <Text>Logging in...</Text>
          :
            null
        }
        {
          this.props.error ?
            <Text style={{color: 'red'}}>Error during login</Text>
          :
            null
        }

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
          <Text>Non hai un account? Crealo in 30 secondi!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginFormPresentational;