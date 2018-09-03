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
import songStyles from '../../styles/songStyles';

const SkeletonLoadingPost = () => (
  <PlaceholderContainer
    style={songStyles.box}
    animatedComponent={<Gradient />}
    duration={1000}
    delay={0}
  >

    <View>
      <Placeholder style={[skeletonStyles.placeholderText, { width: '80%' }]} />
      <Placeholder style={[skeletonStyles.placeholderText, { width: '90%', height: 90 }]} />
    </View>
  </PlaceholderContainer>
);

export default SkeletonLoadingPost;