import React from 'react';

import RegistrationForm from '../../containers/RegistrationForm';

class RegistrationScreen extends React.Component {
  static navigationOptions = {
    title: 'Registrati',
  };

  render() {
    return (
      <RegistrationForm navigation={this.props.navigation} />
    );
  }
}

export default RegistrationScreen;