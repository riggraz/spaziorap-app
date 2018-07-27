import React from 'react';
import {
  ScrollView
} from 'react-native';

import NewPostButton from './NewPostButton';
import {NEW_TEXT_POST, NEW_YT_POST} from '../../constants/navigation';

class NewPostMenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Nuovo post',
  };

  render() {
    const {navigation} = this.props;

    return (
      <ScrollView>
        <NewPostButton
          title='TESTO'
          emoji='📃'
          handlePress={() => navigation.navigate(NEW_TEXT_POST)}
        />

        <NewPostButton
          title='VIDEO YOUTUBE'
          emoji='🎬'
          handlePress={() => navigation.navigate(NEW_YT_POST)}
        />
      </ScrollView>
    );
  }
}

export default NewPostMenuScreen;