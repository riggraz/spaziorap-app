/*
  Takes in navigation prop and return 'latest' if in the HomePage latest section,
  'trending' if in the HomePage trending section, 'selectedTopic' if in the
  TopicPosts page
*/

import {
  LATEST_POSTS,
  TRENDING_POSTS,
  POSTS_BY_TOPIC,
  SINGLE_HOME_POST,
  SINGLE_POST
} from '../constants/navigation';

export default getOf = navigation => {
  if (!navigation) return 'latest';
  
  let of = '';

  switch (navigation.state.routeName) {
    case LATEST_POSTS:
    case SINGLE_HOME_POST:
    default:
      of = 'latest';
      break;

    case TRENDING_POSTS:
      of = 'trending';
      break;

    case POSTS_BY_TOPIC:
    case SINGLE_POST:
      of = 'selectedTopic';
      break;
  }

  return of;
};