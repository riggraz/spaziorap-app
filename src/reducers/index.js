import {combineReducers} from 'redux';

import home from './home';
import posts from './posts';
import currentPost from './currentPost';
import topics from './topics';
import user from './user';
import player from './player';

const rootReducer = combineReducers({
  home,
  posts,
  currentPost,
  topics,
  user,
  player,
});

export default rootReducer;