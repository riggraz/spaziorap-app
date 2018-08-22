import React from 'react';
import {ScrollView} from 'react-native';

import HeaderRight from '../../containers/HeaderRight';

import Menu from './Menu';
import LatestSongs from '../../containers/LatestSongs';
import PostsListHorizontal from './PostsListHorizontal';

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  ({
    title: 'Spazio Rap',
    headerRight: <HeaderRight navigation={navigation} />,
  });

  render() {
    const {navigation} = this.props;

    return (
      <ScrollView>
        <Menu navigation={navigation} />

        <LatestSongs />

        <PostsListHorizontal branch='latest' navigation={navigation} />
      </ScrollView>
    );
  }
}

export default HomeScreen;