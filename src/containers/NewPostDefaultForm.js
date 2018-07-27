import {connect} from 'react-redux';

import NewPostDefaultFormP from '../components/NewPostScreens/NewPostDefaultFormP';

import {submitPost} from '../actions/submitPost';

const mapStateToProps = state =>
  ({
    isSubmitting: state.user.newPost.isSubmitting,
    hasSubmitted: state.user.newPost.hasSubmitted,
    error: state.user.newPost.error,

    topics: state.topics.items,

    accessToken: state.user.accessToken,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleSubmit(title, topicId, body, url, accessToken, navigation) {
      dispatch(submitPost(title, topicId, body, url, accessToken, navigation));
    }
  });

const NewPostDefaultForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPostDefaultFormP);

export default NewPostDefaultForm;