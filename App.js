import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';

import rootReducer from './src/reducers';

import SpazioRap from './src/components/SpazioRap';

import {fetchPosts} from './src/actions/requestPosts';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

store.dispatch(fetchPosts('latest'))
  .then(
    () => console.log(store.getState()),
    error => console.log('An error occurred: ' + error)
  );

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
