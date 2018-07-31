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
} from '../constants/navigation';
import {
  LATEST_BRANCH,
  TRENDING_BRANCH,
  SELECTEDTOPIC_BRANCH,
  PROFILE_BRANCH,
} from '../constants/branches';

const getBranch = navigation => {
  if (!navigation) return LATEST_BRANCH;

  switch (navigation.state.routeName) {
    case LATEST_POSTS:
      return LATEST_BRANCH;

    case TRENDING_POSTS:
      return TRENDING_BRANCH;

    case POSTS_BY_TOPIC:
      return SELECTEDTOPIC_BRANCH;

    /*
      PROFILE non c'è perché branch viene passato come prop
      a PostsList direttamente da UserInfoP. Negli altri casi, invece,
      non viene passato direttamente ma si esegue prima questa funzione.
    */

    default:
      return LATEST_BRANCH;
  }
};

export default getBranch;