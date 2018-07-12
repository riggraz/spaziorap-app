import React from 'react';
import {Text} from 'react-native';

import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import PostsScreen from './PostsScreen';

const PostsStack = createStackNavigator(
  {
    Posts: PostsScreen,
  }
);

const RootStack = createBottomTabNavigator(
  {
    Posts: PostsStack,
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let icon;

        if (routeName === 'Posts') icon = '📖';

        return <Text>{icon}</Text>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

class SpazioRap extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

export default SpazioRap;