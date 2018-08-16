import {combineReducers} from 'redux';

import posts from './posts';
import topics from './topics';
import user from './user';
import player from './player';

const rootReducer = combineReducers({
  posts,
  topics,
  user,
  player,
});

export default rootReducer;