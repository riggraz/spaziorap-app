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
        backgroundColor: '#F15946',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#F15946',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
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

        return <Text style={{fontSize: 18}}>{icon}</Text>;
      },
    }),
    initialRouteName: 'Posts',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#95190C',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 13,
      },
    },
  },
);

export default RootStack;