import {combineReducers} from 'redux';

import home from './home';
import posts from './posts';
import topics from './topics';
import user from './user';
import player from './player';

const rootReducer = combineReducers({
  home,
  posts,
  topics,
  user,
  player,
});

export default rootReducer;