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

const SkeletonLoadingPost = () => (
  <PlaceholderContainer
    style={skeletonStyles.placeholderContainer}
    animatedComponent={<Gradient />}
    duration={1000}
    delay={0}
  >
    
    <Placeholder style={[skeletonStyles.placeholderTitleText, { width: '85%' }]} />

    <View>
      <Placeholder style={[skeletonStyles.placeholderText, { width: '80%' }]} />
      <Placeholder style={[skeletonStyles.placeholderText, { width: '85%' }]} />
      <Placeholder style={[skeletonStyles.placeholderText, { width: '75%' }]} />
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
      <Placeholder style={[skeletonStyles.placeholderBox, { width: '20%' }]} />
      <Placeholder style={[skeletonStyles.placeholderBox, { width: '20%' }]} />
      <Placeholder style={[skeletonStyles.placeholderBox, { width: '20%' }]} />
    </View>
  </PlaceholderContainer>
);

export default SkeletonLoadingPost;