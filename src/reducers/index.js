import {combineReducers} from 'redux';

import home from './home';
import artists from './artists';
import posts from './posts';
import currentPost from './currentPost';
import topics from './topics';
import user from './user';
import player from './player';

const rootReducer = combineReducers({
  home,
  artists,
  posts,
  currentPost,
  topics,
  user,
  player,
});

export default rootReducer;