import React from 'react';
import {
  SectionList,
  Text,
} from 'react-native';

import TopicsListSectionHeader from './TopicsListSectionHeader';
import TopicsListItem from './TopicsListItem';

import globalStyles from '../../styles/globalStyles';

const TopicsListP = ({topics, areFetching, handleTopicChange, navigateToPostsListByTopic}) => (
    !areFetching ? (
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
      // renderSectionHeader={
      //   ({section: {title}}) =>
      //     <TopicsListSectionHeader title={title} />
      // }
      sections={[
        {title: 'Tutti', data: topics},
      ]}
      stickySectionHeadersEnabled
      keyExtractor={(item, index) => item + index}
      style={globalStyles.container}
    />
  ) : (
    <Text style={{textAlign: 'center', marginTop: 24, fontSize: 18}}>Caricamento delle categorie...</Text>
  )
);

export default TopicsListP;