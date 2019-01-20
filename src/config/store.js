import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

import {fetchLatestSongs} from '../actions/requestLatestSongs';
import {fetchLatestPosts} from '../actions/requestLatestPosts';
import {fetchTopics} from '../actions/requestTopics';
import {verifyAccessToken} from '../actions/verifyAccessToken';

import {loadValueByKey} from './localStorage';
import { fetchArtists } from '../actions/requestArtists';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
  ),
);

if (__DEV__) {
  store.subscribe(
    () => console.log(store.getState())
  );
}

store.dispatch(fetchArtists());
store.dispatch(fetchLatestSongs());
store.dispatch(fetchTopics());
store.dispatch(fetchLatestPosts());

const loadAccessToken = async () => {
  const accessToken = await loadValueByKey('accessToken');
  if (accessToken) store.dispatch(verifyAccessToken(accessToken));
}
loadAccessToken();

export default store;