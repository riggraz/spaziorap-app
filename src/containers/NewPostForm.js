import {connect} from 'react-redux';

import NewPostFormP from '../components/NewPostScreen/NewPostFormP';

import {submitPost, resetPostSubmission} from '../actions/submitPost';
import {
  changeSelectedTopic,
  changeBody,
  changeUrl,
} from '../actions/changeNewPostForm';

const mapStateToProps = state =>
  ({
    form: state.user.newPost.form,
    isSubmitting: state.user.newPost.isSubmitting,
    hasSubmitted: state.user.newPost.hasSubmitted,
    error: state.user.newPost.error,
    selectedPostType: state.user.newPost.postType,

    topics: state.topics.items,

    accessToken: state.user.accessToken,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleSelectedTopicChange(topicId) {
      dispatch(changeSelectedTopic(topicId));
    },

    handleBodyChange(body) {
      dispatch(changeBody(body));
    },

    handleUrlChange(url) {
      dispatch(changeUrl(url));
    },
  });

const NewPostForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPostFormP);

export default NewPostForm;