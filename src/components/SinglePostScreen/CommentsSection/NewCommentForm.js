import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
  StyleSheet,
  findNodeHandle,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import formStyles from '../../../styles/formStyles';

import {MAIN_COLOR} from '../../../constants/colors';
import { LOGIN } from '../../../constants/navigation';

class NewCommentForm extends React.Component {
  constructor() {
    super();

    this.state = {
      commentText: '',
    };

    this.textInputRef = React.createRef();
  }
  
  componentDidMount = () => {
    if (this.props.parentId && this.props.isLoggedIn) {
      this.textInputRef.current.focus();
    }
  };

  _handleScrollViewAwareness = input => {
    if (this.props.handleScrollViewAwareness) {
      this.props.handleScrollViewAwareness(findNodeHandle(this.textInputRef.current));
    }
  };

  render() {
    const {
      handleCommentSubmit,
      parentId,
      handleScrollViewAwareness,
      postId,
      isLoggedIn,
      accessToken,
      navigation
    } = this.props;

    const {isSubmitting} = this.props;
    const submittable = this.state.commentText;

    if (!isLoggedIn) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
          <Text style={styles.loginMessage}>
            devi essere loggato per poter commentare. clicca qui per accedere.
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.newCommentForm}>
          <TextInput
            ref={this.textInputRef}
            placeholder='commenta...'
            onChangeText={(commentText) => {
              this.setState({commentText});
              this._handleScrollViewAwareness();
            }}
            onFocus={() => this._handleScrollViewAwareness()}
            value={this.state.commentText}
            underlineColorAndroid='transparent'
            multiline
            style={[formStyles.input, {width: '90%', margin: 0}]}
          />

          {
            !isSubmitting ?
              <TouchableOpacity
                onPress={
                  () => {
                    Keyboard.dismiss();
                    handleCommentSubmit(this.state.commentText, postId, parentId, accessToken);
                    this.setState({commentText: ''});
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

  loginMessage: {
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginVertical: 4,
    marginHorizontal: 8,
  },

  submittable: {
    opacity: 1.0,
  },

  notSubmittable: {
    opacity: 0.4,
  },
});