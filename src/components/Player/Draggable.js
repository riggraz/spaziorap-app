import React, { Component } from 'react';
import {
  AppState,
  PanResponder,
  Animated,
  Dimensions,
  Text,
} from 'react-native';

import PlayerInterface from './PlayerInterface';

import {PLAYER_HEIGHT, PLAYER_WIDTH} from '../../constants/player';

class Draggable extends Component {
  constructor(props) {
    super(props);

    this.size = props.size;

    this.state = {
      pan: new Animated.ValueXY({
        x: Dimensions.get('window').width / 4,
        y: Dimensions.get('window').height / 4,
      }),

      dragging: false,

      vx: 1,
      vy: 1,

      appState: AppState.currentState,

      opacity: new Animated.Value(0.0),
    };

    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,

      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        //gets invoked when we grant access to the movement of an element
        //perfect to set up initial values
        this.setState({dragging: true});

        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },
      
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y}
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.setState({dragging: false});
        
        this.state.pan.flattenOffset();
      }
    });
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);

    Animated.timing(
      this.state.opacity,
      {
        toValue: 1.0,
        duration: 250,
      }
    ).start();
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {        
    this.setState({appState: nextAppState});
  }

  handleMinimize = () => {
    Animated.timing(
      this.state.pan, //the value to drive
      {
        toValue: {
          x: Dimensions.get('window').width - 23,
          y: Dimensions.get('window').height - PLAYER_HEIGHT - 10 - 60,
        },

        duration: 200,
      }
    ).start();
  }

  //The render method is called constantly as we are dragging the Animated View
  render() {
    const {pan, vx, vy} = this.state;

    const draggableStyle = {
      transform: [
        {
          translateX: pan.x
        },
        {
          translateY: pan.y
        }
      ],

      position: 'absolute',

      opacity: this.state.opacity,
    };

    return(
      <Animated.View style={draggableStyle} {...this._panResponder.panHandlers}>
        {
          this.state.appState === 'active' ?
            <PlayerInterface
              videoId={this.props.videoId}
              handleHide={this.props.handleHide}
              handleMinimize={this.handleMinimize}
            />
          :
            null
        }
      </Animated.View>
    );
  }
}

export default Draggable;