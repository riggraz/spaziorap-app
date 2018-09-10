import React from 'react';
import {Text} from 'react-native';

import PostTypePicker from '../../containers/PostTypePicker';
import SubmitButton from '../../containers/SubmitButton';
import NewPostForm from '../../containers/NewPostForm';

class NewPostScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    headerLeft: <PostTypePicker />,
    headerRight: <SubmitButton />
  });

  render() {
    return <NewPostForm navigation={this.props.navigation} />;
  }
}

export default NewPostScreen;