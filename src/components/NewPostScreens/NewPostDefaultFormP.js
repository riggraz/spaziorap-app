import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import TopicPicker from './TopicPicker';

import globalStyles from '../../styles/globalStyles';
import formStyles from '../../styles/formStyles';

class NewPostDefaultFormP extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedTopic: undefined,

      bodyInputText: undefined,
      urlInputText: undefined,
    };
  }

  _handleSubmit = () => {
    const {
      selectedTopic,

      bodyInputText,
      urlInputText,
    } = this.state;
    const {accessToken} = this.props;
    const {handleSubmit} = this.props;

    handleSubmit(
      selectedTopic,

      bodyInputText,
      urlInputText,

      accessToken,

      this.props.navigation,
    );
  }

  _handleChangeSpecificField = text => {
    const typeAndValue = text.split('~', 2);
    const type = typeAndValue[0];
    const value = typeAndValue[1];

    switch (type) {
      case 'body':
        this.setState({bodyInputText: value});
        break;

      case 'url':
        this.setState({urlInputText: value});
        break;

      default:
        break;
    }
  }

  render() {
    const {topics} = this.props;
    const {selectedTopic} = this.state;

    let renderSpecificField = this.props.children;

    return (
      <ScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={formStyles.center}
        style={globalStyles.container}
      >
        {
          this.props.error ?
            <Text style={formStyles.redLabel}>Non hai compilato tutti i campi. Riprova.</Text>
          :
            null
        }

        <Text style={formStyles.label}>
          Argomento
        </Text>
        <TopicPicker
          topics={topics}
          selectedTopic={selectedTopic}
          handleTopicChange={selectedTopic => this.setState({selectedTopic})}
        />

        {
          renderSpecificField(
            this.state,
            text => this._handleChangeSpecificField(text)
          )
        }

        <TouchableOpacity
          onPress={() => this._handleSubmit()}
          style={[formStyles.button,{marginBottom: 256}]}>
          <Text style={formStyles.buttonText}>
            {
              this.props.isSubmitting ?
                'Sto postando...'
              :
                'Invia'
            }
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default NewPostDefaultFormP;