import React from 'react';
import {ActivityIndicator} from 'react-native';

const LoadingInfo = ({isLoading}) =>
  <ActivityIndicator
    animating={isLoading}
    color='white'
    size='large'
  />

export default LoadingInfo;