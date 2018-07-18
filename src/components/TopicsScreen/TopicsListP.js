import React from 'react';
import {
  SectionList,
  Text,
} from 'react-native';

import TopicsListSectionHeader from './TopicsListSectionHeader';
import TopicsListItem from './TopicsListItem';

const TopicsListP = ({topics, handleTopicChange, navigation}) =>
  <SectionList
    renderItem={
      ({item, index, section}) =>
        <TopicsListItem
          name={item.name}
          handlePress={() => {
            handleTopicChange(item.id);
            navigation.navigate('Posts');
          }}
          key={index}
        />
    }
    renderSectionHeader={
      ({section: {title}}) =>
        <TopicsListSectionHeader title={title} />
    }
    sections={[
      {title: 'Migliori', data: [{id: 'latest', name: 'nuovi'}, {id: 'trending', name: 'di moda'}]},
      {title: 'Tutti', data: topics},
    ]}
    keyExtractor={(item, index) => item + index}
    stickySectionHeadersEnabled
  />

export default TopicsListP;