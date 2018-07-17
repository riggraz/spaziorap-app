import {connect} from 'react-redux';

import PostsListP from '../components/PostsScreen/PostsListP';

const mapStateToProps = state =>
  ({
    posts: state.posts.items,
    areFetching: state.posts.areFetching,
  });

const PostsList = connect(
  mapStateToProps,
  null
)(PostsListP);

export default PostsList;