import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import TopicsListHorizontalItem from './TopicsListHorizontalItem';

import globalStyles from '../../styles/globalStyles';
import homeStyles from '../../styles/homeStyles';

import {BOX_BACKGROUND_COLOR, BOX_BORDER_COLOR} from '../../constants/colors';
import SkeletonLoadingTopics from '../SkeletonLoading/SkeletonLoadingTopics';

const TopicsListHorizontalP = ({titleVisible, topics, areFetching, handleTopicChange, navigateToPostsListByTopic}) => (
  <View style={globalStyles.hiddenBox}>
    { titleVisible ? <Text style={homeStyles.title}>categorie</Text> : null }
    {
      !areFetching ?
        <FlatList
          horizontal={true}
          data={topics}

          renderItem={
            ({item}) => (
              <TopicsListHorizontalItem
                name={item.name}
                handlePress={() => {
                  handleTopicChange(item.id);
                  navigateToPostsListByTopic(item.name);
                }}
              />
            )
          }

          keyExtractor={item => item.id}

          getItemLayout={
            (data, index) =>
              ({
                length: 72,
                offset: 72 * index,
                index
              })
          }

          style={styles.box}
        />
      :
        <SkeletonLoadingTopics />
    }
  </View>
);

export default TopicsListHorizontalP;

const styles = StyleSheet.create({
  box: {
    backgroundColor: BOX_BACKGROUND_COLOR,

    borderWidth: 1,
    borderColor: BOX_BORDER_COLOR,
    borderRadius: 16,

    padding: 16,
    margin: 8,
  },
});