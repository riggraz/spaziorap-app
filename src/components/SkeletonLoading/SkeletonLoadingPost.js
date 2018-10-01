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
import likeAndCommentBoxStyles from '../../styles/likeAndCommentBoxStyles';
import globalStyles from '../../styles/globalStyles';
import postInfoBoxStyles from '../../styles/postInfoBoxStyles';

const SkeletonLoadingPost = () => (
  <PlaceholderContainer
    style={globalStyles.box}
    animatedComponent={<Gradient />}
    duration={1000}
    delay={0}
  >

    <View style={postInfoBoxStyles.infoBox}>
      <Placeholder style={[skeletonStyles.placeholderInfoBoxText, { width: '20%' }]} />
      <Placeholder style={[skeletonStyles.placeholderInfoBoxText, { width: '20%' }]} />
      <Placeholder style={[skeletonStyles.placeholderInfoBoxText, { width: '20%' }]} />
    </View>

    <View>
      <Placeholder style={[skeletonStyles.placeholderText, { width: '90%' }]} />
      <Placeholder style={[skeletonStyles.placeholderText, { width: '80%' }]} />
      <Placeholder style={[skeletonStyles.placeholderText, { width: '85%' }]} />
    </View>

    <View style={likeAndCommentBoxStyles.container}>
      <View style={{flexDirection: 'row'}}>
        <Placeholder style={skeletonStyles.placeholderEmoji} />
        <Placeholder style={[skeletonStyles.placeholderText, { width: 20 }]} />
        <Placeholder style={skeletonStyles.placeholderEmoji} />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Placeholder style={[skeletonStyles.placeholderText, { width: 20 }]} />
        <Placeholder style={skeletonStyles.placeholderEmoji} />
      </View>
    </View>
  </PlaceholderContainer>
);

export default SkeletonLoadingPost;