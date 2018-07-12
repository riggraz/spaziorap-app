import {connect} from 'react-redux';

import PostsListPresentational from '../components/PostsScreen/PostsListPresentational';

const mapStateToProps = state =>
  ({
    posts: state.posts.items,
    areFetching: state.posts.areFetching,
  });

const PostsList = connect(
  mapStateToProps,
  null
)(PostsListPresentational);

export default PostsList;