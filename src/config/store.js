import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

import {fetchPosts} from '../actions/requestPosts';
import {fetchTopics} from '../actions/requestTopics';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

store.subscribe(
  () => console.log(store.getState())
);

store.dispatch(fetchPosts('latest'));
store.dispatch(fetchTopics());

export default store;