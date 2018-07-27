import React from 'react';
import {Text} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

//Posts stack
import PostsScreen from '../components/PostsScreen';
import SinglePostScreen from '../components/SinglePostScreen';

//Topics stack
import TopicsScreen from '../components/TopicsScreen';

//NewPost stack
import NewButton from '../components/NewButton'; //bottomTab button
import NewPostMenuScreen from '../components/NewPostMenuScreen';
import NewTextPostScreen from '../components/NewPostScreens/NewTextPostScreen';

//Auth stack
import LoginScreen from '../components/LoginScreen';
import RegistrationScreen from '../components/RegistrationScreen';

import {
  HOME,
    LATEST_POSTS,
    TRENDING_POSTS,
    SINGLE_HOME_POST,

  TOPICS,
    TOPICS_LIST,
    POSTS_BY_TOPIC,
    SINGLE_POST,

  NEW_POST_MENU,
    NEW_TEXT_POST,
    NEW_YT_POST,

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
    [LATEST_POSTS]: PostsScreen,
    [TRENDING_POSTS]: PostsScreen,
    [SINGLE_HOME_POST]: SinglePostScreen,
  },
  {
    initialRouteName: LATEST_POSTS,
    navigationOptions: defaultNavigationOptions,
  },
);

const TopicsStack = createStackNavigator(
  {
    [TOPICS_LIST]: TopicsScreen,
    [POSTS_BY_TOPIC]: PostsScreen,
    [SINGLE_POST]: SinglePostScreen,
  },
  {
    initialRouteName: TOPICS_LIST,
    navigationOptions: defaultNavigationOptions,
  },
);

const NewPostStack = createStackNavigator(
  {
    [NEW_POST_MENU]: NewPostMenuScreen,
    [NEW_TEXT_POST]: NewTextPostScreen,
    // [NEW_YT_POST]: null,
  },
  {
    initialRouteName: NEW_POST_MENU,
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
    [NEW_POST_MENU]: {
      screen: NewPostStack,
      navigationOptions: ({navigation}) => ({
        tabBarButtonComponent: () => <NewButton navigation={navigation} />,
      }),
    },
    'Oggi': AuthStack,
    [AUTH]: AuthStack,
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let icon;

        if (routeName === HOME) icon = '🏠';
        else if (routeName === TOPICS) icon = '📚';
        else if (routeName === 'Oggi') icon = '❓';
        else if (routeName === AUTH) icon = '👤';

        return <Text style={{fontSize: 18}}>{icon}</Text>;
      },
    }),
    initialRouteName: NEW_POST_MENU,
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