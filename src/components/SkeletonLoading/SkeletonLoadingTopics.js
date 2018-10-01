import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {
  PlaceholderContainer,
  Placeholder,
} from 'react-native-loading-placeholder';

import Gradient from './Gradient';

import skeletonStyles from '../../styles/skeletonStyles';
import globalStyles from '../../styles/globalStyles';

const SkeletonLoadingTopics = () => (
  <PlaceholderContainer
    style={[globalStyles.box, {marginTop: 16}]}
    animatedComponent={<Gradient />}
    duration={1000}
    delay={0}
  >

    <ScrollView horizontal style={{flexDirection: 'row', margin: 0, padding: 0,}}>
      <View style={skeletonStyles.placeholderTopicContainer}>
        <Placeholder style={skeletonStyles.placeholderTopicIcon} />
        <Placeholder style={[skeletonStyles.placeholderSmallText, {width: 30, alignSelf: 'center',}]} />
      </View>
      <View style={skeletonStyles.placeholderTopicContainer}>
        <Placeholder style={skeletonStyles.placeholderTopicIcon} />
        <Placeholder style={[skeletonStyles.placeholderSmallText, {width: 30, alignSelf: 'center',}]} />
      </View>
      <View style={skeletonStyles.placeholderTopicContainer}>
        <Placeholder style={skeletonStyles.placeholderTopicIcon} />
        <Placeholder style={[skeletonStyles.placeholderSmallText, {width: 30, alignSelf: 'center',}]} />
      </View>
      <View style={skeletonStyles.placeholderTopicContainer}>
        <Placeholder style={skeletonStyles.placeholderTopicIcon} />
        <Placeholder style={[skeletonStyles.placeholderSmallText, {width: 30, alignSelf: 'center',}]} />
      </View>
      <View style={skeletonStyles.placeholderTopicContainer}>
        <Placeholder style={skeletonStyles.placeholderTopicIcon} />
        <Placeholder style={[skeletonStyles.placeholderSmallText, {width: 30, alignSelf: 'center',}]} />
      </View>
    </ScrollView>
  </PlaceholderContainer>
);

export default SkeletonLoadingTopics;