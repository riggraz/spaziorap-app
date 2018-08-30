import React from 'react';
import {
  AppState,
  View,
} from 'react-native';

import RootStack from '../config/navigation';
import Player from '../containers/Player';


class SpazioRap extends React.Component {
  constructor() {
    super();

    this.state = {
      appState: AppState.currentState,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {        
    this.setState({appState: nextAppState});
  }

  render() {
    const {appState} = this.state;

    return (
      <View style={{flex: 1}}>
        <RootStack />
        {
          appState === 'active' ? <Player /> : null
        }
      </View>
    );
  }
}

export default SpazioRap;