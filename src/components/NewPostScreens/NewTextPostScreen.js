import React from 'react';

import NewPostDefaultForm from '../../containers/NewPostDefaultForm';
import TextPostSpecificField from './SpecificFields/TextPostSpecificField';

class NewTextPostScreen extends React.Component {
  static navigationOptions = {
    title: 'Nuovo post di testo',
  };

  render() {
    return (
      <NewPostDefaultForm navigation={this.props.navigation}>
        {
          (state, handleChangeText) => (
            <TextPostSpecificField
              value={state.bodyInputText}
              handleChangeText={handleChangeText}
            />
          )
        }
      </NewPostDefaultForm>
    );
  }
}

export default NewTextPostScreen;