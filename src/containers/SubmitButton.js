import {connect} from 'react-redux';

import SubmitButtonP from '../components/NewPostScreen/Header/SubmitButtonP';

import {submitPost} from '../actions/submitPost';

const mapStateToProps = state =>
  ({
    selectedTopic: state.user.newPost.form.selectedTopic,
    body: state.user.newPost.form.body,
    url: state.user.newPost.form.url,

    accessToken: state.user.accessToken,
   
    selectedPostType: state.user.newPost.postType,
  });

const mapDispatchToProps = dispatch =>
  ({
    handleSubmit(selectedTopic, body, url, accessToken) {
      dispatch(submitPost(selectedTopic, body, url, accessToken));
    },
  });

const SubmitButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubmitButtonP);

export default SubmitButton;