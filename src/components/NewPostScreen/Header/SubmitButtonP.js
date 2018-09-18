import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {TEXT_POST, VIDEO_POST} from '../../../constants/postTypes';

class SubmitButtonP extends React.Component {
  _submittable = () => {
    const {
      selectedTopic,
      body,
      url,
    } = this.props;

    switch (this.props.selectedPostType) {
      case TEXT_POST:
        if (body) return true;
        else return false;

      case VIDEO_POST:
        if (body && url) return true;
        else return false;

      default:
        return false;
    }
  }

  render() {
    const {
      selectedTopic,
      body,
      url,

      isSubmitting,

      accessToken,

      handleSubmit,
    } = this.props;

    const submittable = this._submittable();

    return !isSubmitting ? (
      <TouchableOpacity
        onPress={() => handleSubmit(selectedTopic, body, url, accessToken)}
        disabled={!submittable}
      >
        <Ionicons
          name='ios-paper-plane'
          size={42}
          color='white'
          style={[
            styles.submitButton,
            submittable ? styles.submittable : styles.notSubmittable,
          ]}
        />
      </TouchableOpacity>
    ) : (
      <ActivityIndicator size='large' color='white' style={styles.submitButton} />
    );
  }
}

export default SubmitButtonP;

const styles = StyleSheet.create({
  submitButton: {
    marginRight: 16,
  },

  submittable: {
    opacity: 1.0,
  },

  notSubmittable: {
    opacity: 0.4,
  },
});