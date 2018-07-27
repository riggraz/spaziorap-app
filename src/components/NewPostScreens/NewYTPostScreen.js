import React from 'react';

import NewPostDefaultForm from '../../containers/NewPostDefaultForm';
import YTPostSpecificField from './SpecificFields/YTPostSpecificField';

class NewYTPostScreen extends React.Component {
  static navigationOptions = {
    title: 'Nuovo post video YouTube',
  };

  render() {
    return (
      <NewPostDefaultForm navigation={this.props.navigation}>
        {
          (state, handleChangeText) => (
            <YTPostSpecificField
              value={state.bodyInputText}
              handleChangeText={handleChangeText}
            />
          )
        }
      </NewPostDefaultForm>
    );
  }
}

export default NewYTPostScreen;