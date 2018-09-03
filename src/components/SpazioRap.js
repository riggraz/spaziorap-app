import React from 'react';
import {View} from 'react-native';

import RootStack from '../config/navigation';
import Player from '../containers/Player';

class SpazioRap extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <RootStack />
        <Player />
      </View>
    );
  }
}

export default SpazioRap;