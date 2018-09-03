import React from 'react';

import NewPostMenu from '../../containers/NewPostMenu';

class NewPostMenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Nuovo post',
  };

  render() {
    return (
      <NewPostMenu navigation={this.props.navigation} />
    );
  }
}

export default NewPostMenuScreen;