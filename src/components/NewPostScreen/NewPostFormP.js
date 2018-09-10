import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import TopicPicker from './TopicPicker';
import MultilineTextInput from './MultilineTextInput';

import VideoPostSpecificField from './SpecificFields/VideoPostSpecificField';

import globalStyles from '../../styles/globalStyles';
import formStyles from '../../styles/formStyles';

import {TEXT_POST, VIDEO_POST} from '../../constants/postTypes';
import {LATEST_POSTS} from '../../constants/navigation';

class NewPostFormP extends React.Component {

  componentDidUpdate() {
    if (this.props.hasSubmitted) {
      this.props.navigation.navigate(LATEST_POSTS);
    }
  }

  _renderSpecificField = selectedPostType => {
    switch (selectedPostType) {
      case TEXT_POST:
      default:
        return null;

      case VIDEO_POST:
        return (
          <VideoPostSpecificField
            value={this.props.form.url}
            handleChangeText={text => this.props.handleUrlChange(text)}
          />
        );
    }
  }

  _renderErrorMessage = error => {
    if (error) {
      return <Text style={formStyles.redLabel}>Non hai compilato tutti i campi. Riprova.</Text>;
    }
  }

  render() {
    const {
      selectedPostType,
      topics,
    } = this.props;
    const {
      selectedTopic,
      body,
      url,
    } = this.props.form;
    const {
      handleSelectedTopicChange,
      handleBodyChange,
      handleUrlChange,
    } = this.props;

    return (
      <View>
        { this._renderErrorMessage(this.props.error) }

        <TopicPicker
          topics={topics}
          selectedTopic={selectedTopic}
          handleTopicChange={selectedTopic => handleSelectedTopicChange(selectedTopic)}
        />

        { this._renderSpecificField(selectedPostType) }

        <MultilineTextInput
          value={body}
          handleChangeText={text => handleBodyChange(text)}
        />
      </View>
    );
  }
}

export default NewPostFormP;