import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import formStyles from '../../../styles/formStyles';

import {MAIN_COLOR} from '../../../constants/colors';

class NewCommentForm extends React.Component {
  constructor() {
    super();

    this.state = {
      commentText: '',
    };
  }

  render() {
    const {handleCommentSubmit, parentId, postId, accessToken} = this.props;

    const {isSubmitting} = this.props;
    const submittable = this.state.commentText;

    return (
      <View style={styles.newCommentForm}>
        <TextInput
          placeholder='commenta...'
          onChangeText={(commentText) => this.setState({commentText})}
          underlineColorAndroid='transparent'
          multiline
          style={[formStyles.input, {width: '90%', maxHeight: 100, margin: 0}]}
        />

        {
          !isSubmitting ?
            <TouchableOpacity
              onPress={
                () => {
                  const body = this.state.commentText;
                  this.setState({commentText: ''});
                  handleCommentSubmit(body, postId, parentId, accessToken);
                }
              }
              disabled={!submittable}
              style={{marginBottom: 8}}
            >
              <Ionicons
                name='ios-paper-plane'
                size={36}
                color={MAIN_COLOR}
                style={[
                  styles.submitButton,
                  submittable ? styles.submittable : styles.notSubmittable,
                ]}
              />
            </TouchableOpacity>
          :
            <ActivityIndicator size='large' color={MAIN_COLOR} />
        }
      </View>
    );
  }
}

export default NewCommentForm;

const styles = StyleSheet.create({
  newCommentForm: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'white',

    marginVertical: 8,
    marginHorizontal: 0,
    paddingHorizontal: 8,
  },

  submittable: {
    opacity: 1.0,
  },

  notSubmittable: {
    opacity: 0.4,
  },
});