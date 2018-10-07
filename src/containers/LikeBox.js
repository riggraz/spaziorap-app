import {connect} from 'react-redux';

import LikeBoxP from '../components/LikeBox/index';

import {like} from '../actions/like';

const mapStateToProps = (state, ownProps) =>
  ({
    score: ownProps.type === 'post' ?
      state.posts[ownProps.branch].items.find(post => post.id === ownProps.id) && state.posts[ownProps.branch].items.find(post => post.id === ownProps.id).score
      :
        ownProps.type === 'singlePost' ?
          state.currentPost.post.score
        :
          state.currentPost.comments.items.find(comment => comment.id === ownProps.id) && state.currentPost.comments.items.find(comment => comment.id === ownProps.id).score
    ,
    accessToken: state.user.accessToken,
    isLoggedIn: state.user.isLoggedIn,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleLike(type, id, score, accessToken) {
      dispatch(like(type, id, score, accessToken));
    },
  });

const LikeBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeBoxP);

export default LikeBox;