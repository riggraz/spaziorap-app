import React from 'react';

import HeaderRight from '../PostsScreen/HeaderRight';
import Post from '../../containers/Post';

import {POSTS_BY_TOPIC, PROFILE_PAGE} from '../../constants/navigation';

class SinglePostScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: navigation.getParam('postTitle', 'Post Sconosciuto'),
  });

  render() {
    const {navigation} = this.props;

    return (
      <Post branch={navigation.getParam('branch')} 
        id={navigation.getParam('postId', '-1')}
        navigateToProfile={
          profileName => navigation.push(PROFILE_PAGE, {profileName})
        }
        navigateToPostsByTopic={
          topicName => navigation.navigate(POSTS_BY_TOPIC, {topicName})
        }
      />
    );
  }
}

export default SinglePostScreen;