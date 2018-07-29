import React from 'react';
import {
  SectionList,
  Text,
} from 'react-native';

import TopicsListSectionHeader from './TopicsListSectionHeader';
import TopicsListItem from './TopicsListItem';

const TopicsListP = ({topics, handleTopicChange, navigateToPostsListByTopic}) =>
  <SectionList
    renderItem={
      ({item, index, section}) =>
        <TopicsListItem
          name={item.name}
          handlePress={() => {
            handleTopicChange(item.id);
            navigateToPostsListByTopic(item.name);
          }}
          key={index}
        />
    }
    renderSectionHeader={
      ({section: {title}}) =>
        <TopicsListSectionHeader title={title} />
    }
    sections={[
      {title: 'Tutti', data: topics},
    ]}
    keyExtractor={(item, index) => item + index}
    stickySectionHeadersEnabled
  />

export default TopicsListP;