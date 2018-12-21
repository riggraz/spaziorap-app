import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import HeaderRight from '../../containers/HeaderRight';
import NotificationsButton from '../../containers/NotificationsButton';

import Menu from './Menu/Menu';
import LatestSongs from '../../containers/LatestSongs';
import TopicsListHorizontal from '..//../containers/TopicsListHorizontal';
import PostsListHorizontal from './PostsListHorizontal';
import BottomMenu from './Menu/BottomMenu';

import globalStyles from '../../styles/globalStyles';
import homeStyles from '../../styles/homeStyles';

import {POSTS_BY_TOPIC} from '../../constants/navigation';

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: 'spazio rap',
    headerRight: <HeaderRight navigation={navigation} />,
  });

  render() {
    const {navigation} = this.props;

    return (
      <ScrollView style={globalStyles.container}>
        <Menu navigation={navigation} />
        
        <View style={homeStyles.menu}>
          <NotificationsButton navigation={navigation} />
        </View>

        <LatestSongs foreign={false} />
        {/* <LatestSongs foreign /> */}

        <TopicsListHorizontal
          titleVisible
          navigateToPostsListByTopic={
            topicName => this.props.navigation.navigate(POSTS_BY_TOPIC, { topicName })
          }
        />

        <View style={{flex: 1}}>
          <PostsListHorizontal
            branch='latest'
            navigation={navigation}
          />
        </View>

        <BottomMenu navigation={navigation} />
      </ScrollView>
    );
  }
}

export default HomeScreen;