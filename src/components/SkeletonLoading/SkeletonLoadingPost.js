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

const SkeletonLoadingPost = () => (
  <PlaceholderContainer
    style={styles.placeholderContainer}
    animatedComponent={<Gradient />}
    duration={1000}
    delay={0}
  >
    
    <Placeholder
      style={[
        styles.placeholderText,
        {
          width: '85%',
          height: 40,
        }
      ]}
    />

    <View>
      <Placeholder style={[styles.placeholderText, { width: '80%' }]} />
      <Placeholder style={[styles.placeholderText, { width: '85%' }]} />
      {/* <Placeholder style={[styles.placeholderText, { width: '80%' }]} /> */}
      <Placeholder style={[styles.placeholderText, { width: '75%' }]} />
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
      <Placeholder style={[styles.placeholderBox, { width: '20%' }]} />
      <Placeholder style={[styles.placeholderBox, { width: '20%' }]} />
      <Placeholder style={[styles.placeholderBox, { width: '20%' }]} />
    </View>
  </PlaceholderContainer>
);

export default SkeletonLoadingPost;

const styles = StyleSheet.create({
  placeholderContainer: {
    width: '100%',

    backgroundColor: '#fefefe',

    borderWidth: 1,
    borderColor: '#cbcbcb',

    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,

    marginTop: 8,
    marginBottom: 8,
  },

  placeholderText: {
    height: 14,
    marginTop: 8,
    marginLeft: 24,
    marginRight: 24,
    alignSelf: 'flex-start',
    backgroundColor: '#eeeeee',
  },

  placeholderBox: {
    height: 18,
    marginTop: 8,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 36,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
});