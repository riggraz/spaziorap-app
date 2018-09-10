import {connect} from 'react-redux';

import LikeBoxP from '../components/LikeBox/index';

import {like} from '../actions/like';

const mapStateToProps = (state, ownProps) =>
  ({
    score: state.posts[ownProps.branch].items.find(post => post.id === ownProps.postId).score,
    accessToken: state.user.accessToken,
    isLoggedIn: state.user.isLoggedIn,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleLike(postId, score, accessToken) {
      dispatch(like(postId, score, accessToken));
    },
  });

const LikeBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeBoxP);

export default LikeBox;