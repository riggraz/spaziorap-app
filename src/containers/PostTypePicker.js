import {connect} from 'react-redux';

import PostTypePickerP from '../components/NewPostScreen/Header/PostTypePickerP';

import {selectPostType} from '../actions/selectPostType';

const mapStateToProps = state =>
  ({
    selectedPostType: state.user.newPost.postType,
  });

const mapDispatchToProps = dispatch =>
  ({
    handlePostTypeChange(postType) {
      dispatch(selectPostType(postType));
    },
  });

const PostTypePicker = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostTypePickerP);

export default PostTypePicker;