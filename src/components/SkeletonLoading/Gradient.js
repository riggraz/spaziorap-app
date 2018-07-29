import React from 'react';
import {LinearGradient} from 'expo';

const Gradient = () => (
  <LinearGradient
    colors={['rgba(0,0,0,0.2)', 'transparent']}
    start={[1, 1]}
    end={[1, 1]}
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      width: 15,
      height: 100,
    }}
  />
);

export default Gradient;