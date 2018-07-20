import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

import {fetchLatestPosts} from '../actions/requestLatestPosts';
import {fetchTopics} from '../actions/requestTopics';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  ),
);

store.subscribe(
  () => console.log(store.getState())
);

store.dispatch(fetchTopics());
store.dispatch(fetchLatestPosts());

export default store;