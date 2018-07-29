import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  PlaceholderContainer,
  Placeholder,
} from 'react-native-loading-placeholder';

import Gradient from './Gradient';

import skeletonStyles from '../../styles/skeletonStyles';

const SkeletonLoadingProfileInfo = () => (
  <PlaceholderContainer
    style={skeletonStyles.placeholderContainer}
    animatedComponent={<Gradient />}
    duration={1000}
    delay={0}
  >
    
    <Placeholder style={[skeletonStyles.placeholderTitleText, { width: '85%' }]} />

    <View>
      <Placeholder style={[skeletonStyles.placeholderText, { width: '70%', alignSelf: 'center' }]} />
      <Placeholder style={[skeletonStyles.placeholderText, { width: '70%', alignSelf: 'center' }]} />
      <Placeholder style={[skeletonStyles.placeholderText, { width: '70%', alignSelf: 'center' }]} />
    </View>

  </PlaceholderContainer>
);

export default SkeletonLoadingProfileInfo;