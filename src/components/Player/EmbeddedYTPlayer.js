import React from 'react';
import {WebView} from 'react-native';

import {PLAYER_URL, PLAYER_WIDTH, PLAYER_HEIGHT} from '../../constants/player';

class EmbeddedYTPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      webViewOpacity: 0,
    };
  }

  _handleLoadStart = () => {
    this.setState({webViewOpacity: 0});
  }

  _handleLoadEnd = () => {
    this.setState({webViewOpacity: 1})
  }

  _handleShouldStartLoadWithRequest = navigator => {
    if (navigator.url.indexOf('player') === -1) {
      //l'utente è uscito dalla pagina del player
      this.refs['EmbeddedYTPlayer'].stopLoading();
      return false;
    } else {
      return true;
    }
  }

  render() {
    const {videoId} = this.props;
    
    return (
      <WebView
        source={{uri: `${PLAYER_URL}?videoId=${videoId}`}}
        javaScriptEnabled
        mediaPlaybackRequiresUserAction={false}
        scrollEnabled={false}

        onLoadStart={this._handleLoadStart}
        onLoadEnd={this._handleLoadEnd}

        onNavigationStateChange={this._handleShouldStartLoadWithRequest}
        onShouldStartLoadWithRequest={this._handleShouldStartLoadWithRequest}

        ref='EmbeddedYTPlayer'

        style={{width: PLAYER_WIDTH, height: PLAYER_HEIGHT, opacity: this.state.webViewOpacity}}
      />
    );
  }
}

export default EmbeddedYTPlayer;