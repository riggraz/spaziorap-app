import React from 'react';
import {Provider} from 'react-redux';

import store from './src/config/store';

import SpazioRap from './src/components/SpazioRap';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SpazioRap />
      </Provider>
    );
  }
}

export default App;
