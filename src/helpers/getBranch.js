/*
  A COSA SERVE getBranch(navigation) ?

  Lo state tree è:

  {
    posts: {
      latest: {...},
      trending: {...},
      selectedTopic: {...},
    },
  }

  Chiamo 'latest', 'trending' e 'selectedTopic' branch.

  Quando devo mostrare una PostsList o un SinglePost devo specificare
  in quale branch guardare. Per farlo specifico la prop branch.

  Per evitare di dover creare tre screens diversi (LatestPostsScreen,
  TrendingPostsScreen, TopicPostsScreen) per mostrare tutti e tre i branch,
  ho creato questa funzione che ritorna il branch che dev'essere servito.
  Per capirlo trova la routeName corrente: se siamo in LATEST_POSTS allora
  ovviamente il branch che deve essere servito è 'latest', se siamo in
  POSTS_BY_TOPIC allora è 'selectedTopic' e così via.
*/

import {
  LATEST_POSTS,
  TRENDING_POSTS,
  POSTS_BY_TOPIC,
  SINGLE_POST
} from '../constants/navigation';

export default getBranch = navigation => {
  if (!navigation) return 'latest';

  switch (navigation.state.routeName) {
    case LATEST_POSTS:
      return 'latest';

    case TRENDING_POSTS:
      return 'trending';

    case POSTS_BY_TOPIC:
      return 'selectedTopic';

    default:
      return 'latest';
  }
};