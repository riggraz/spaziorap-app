import React from 'react';
import {Text} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

//Posts stack
import LatestPostsScreen from '../components/PostsScreen/LatestPostsScreen';
import TopicPostsScreen from '../components/PostsScreen/TopicPostsScreen';

//Topics stack
import TopicsScreen from '../components/TopicsScreen';

//Auth stack
import LoginScreen from '../components/LoginScreen';
import RegistrationScreen from '../components/RegistrationScreen';

import {
  HOME,
    LATEST_POSTS,
    TRENDING_POSTS,

  TOPICS,
    TOPICS_LIST,
    POSTS_BY_TOPIC,

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

const HomeStack = createStackNavigator(
  {
    [LATEST_POSTS]: LatestPostsScreen,
    [TRENDING_POSTS]: LatestPostsScreen,
  },
  {
    initialRouteName: LATEST_POSTS,
    navigationOptions: defaultNavigationOptions,
  },
);

const TopicsStack = createStackNavigator(
  {
    [TOPICS_LIST]: TopicsScreen,
    [POSTS_BY_TOPIC]: TopicPostsScreen,
  },
  {
    initialRouteName: TOPICS_LIST,
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
    [HOME]: HomeStack,
    [TOPICS]: TopicsStack,
    [AUTH]: AuthStack,
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let icon;

        if (routeName === HOME) icon = '🏠';
        if (routeName === TOPICS) icon = '📚';
        if (routeName === AUTH) icon = '👤';

        return <Text style={{fontSize: 18}}>{icon}</Text>;
      },
    }),
    initialRouteName: HOME,
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