import React from 'react';
import {Text} from 'react-native';
import {
  createTabNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

//Posts stack
import PostsScreen from '../components/PostsScreen';

//Topics stack
import TopicsScreen from '../components/TopicsScreen';

//Auth stack
import LoginScreen from '../components/LoginScreen';
import RegistrationScreen from '../components/RegistrationScreen';

import {
  POSTS,
  TOPICS,
  AUTH,
  LOGIN,
  REGISTRATION,
} from '../constants/navigation';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#F15946',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const PostsStack = createStackNavigator(
  {
    [POSTS]: PostsScreen,
  },
  {
    initialRouteName: POSTS,
    navigationOptions: defaultNavigationOptions,
  },
);

const TopicsStack = createStackNavigator(
  {
    [TOPICS]: TopicsScreen,
  },
  {
    initialRouteName: TOPICS,
    navigationOptions: defaultNavigationOptions,
  },
);

const AuthStack = createStackNavigator(
  {
    [LOGIN]: LoginScreen,
    [REGISTRATION]: RegistrationScreen,
  },
  {
    initialRouteName: LOGIN,
    navigationOptions: defaultNavigationOptions,
  },
);

const RootStack = createBottomTabNavigator(
  {
    [POSTS]: PostsStack,
    [TOPICS]: TopicsStack,
    [AUTH]: AuthStack,
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let icon;

        if (routeName === POSTS) icon = '💬';
        if (routeName === TOPICS) icon = '📚';
        if (routeName === AUTH) icon = '👤';

        return <Text style={{fontSize: 18}}>{icon}</Text>;
      },
    }),
    initialRouteName: POSTS,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#95190C',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 14,
      },
    },
  },
);

export default RootStack;