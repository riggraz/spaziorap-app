import React from 'react';
import {
  ScrollView
} from 'react-native';

import NewPostMenu from '../../containers/NewPostMenu';
import {NEW_TEXT_POST, NEW_YT_POST} from '../../constants/navigation';

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