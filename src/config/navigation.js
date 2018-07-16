import React from 'react';
import {Text} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import PostsScreen from '../components/PostsScreen';
import LoginScreen from '../components/LoginScreen';

const PostsStack = createStackNavigator(
  {
    Posts: PostsScreen,
  },
  {
    initialRouteName: 'Posts',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#38A700',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  }
)

const RootStack = createBottomTabNavigator(
  {
    Posts: PostsStack,
    Auth: AuthStack,
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let icon;

        if (routeName === 'Posts') icon = '📖';
        if (routeName === 'Auth') icon = '👤';

        return <Text>{icon}</Text>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

export default RootStack;