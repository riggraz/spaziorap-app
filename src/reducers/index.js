import {combineReducers} from 'redux';

import posts from './posts';
import topics from './topics';
import user from './user';

const rootReducer = combineReducers({
  posts,
  topics,
  user
});

export default rootReducer;