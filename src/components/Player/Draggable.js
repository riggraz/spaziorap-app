import React, { Component } from 'react';
import {
  PanResponder,
  Animated
} from 'react-native';

import PlayerInterface from './PlayerInterface';

class Draggable extends Component {
  constructor(props) {
    super(props);

    this.size = props.size;

    this.state = {
      pan: new Animated.ValueXY(),

      dragging: false,

      vx: 1,
      vy: 1
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

      borderWidth: 1,
      borderColor: 'black',

      // margin: 0,
      // padding: 0,
    };

    return(
      <Animated.View style={draggableStyle} {...this._panResponder.panHandlers}>
        <PlayerInterface
          videoId={this.props.videoId}
          handleHide={this.props.handleHide}
        />
      </Animated.View>
    );
  }
}
export default Draggable;