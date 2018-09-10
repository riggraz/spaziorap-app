import React from 'react';
import {Text} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

//Home stack
import HomeScreen from '../components/HomeScreen';

//Posts stack
import PostsScreen from '../components/PostsScreen';
import SinglePostScreen from '../components/SinglePostScreen';

//Topics stack
import TopicsScreen from '../components/TopicsScreen';

//NewPost stack
import NewButton from '../containers/NewButton'; //bottomTab button
import NewPostScreen from '../components/NewPostScreen/';

//Profile stack
import ProfileScreen from '../components/ProfileScreen';

//Auth stack
import LoginScreen from '../components/LoginScreen';
import RegistrationScreen from '../components/RegistrationScreen';

import {
  HOME,

  POSTS,
    LATEST_POSTS,
    TRENDING_POSTS,

  TOPICS,
  TOPICS_LIST,
  POSTS_BY_TOPIC,
  SINGLE_POST,

  NEW_POST,

  PROFILE,
  PROFILE_PAGE,

  AUTH,
    LOGIN,
    REGISTRATION,
} from '../constants/navigation';

//Imports used to fetch profile posts on bottom tab click
import store from './store';
import {fetchProfilePosts} from '../actions/requestProfilePosts';

import {MAIN_COLOR, MAIN_COLOR_DARKER} from '../constants/colors';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: MAIN_COLOR,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const HomeStack = createStackNavigator(
  {
    [HOME]: HomeScreen,
    [POSTS_BY_TOPIC]: PostsScreen,
    [SINGLE_POST]: SinglePostScreen,
    [PROFILE_PAGE]: ProfileScreen,
  },
  {
    initialRouteName: HOME,
    navigationOptions: defaultNavigationOptions,
  },
);

const PostsStack = createStackNavigator(
  {
    [LATEST_POSTS]: PostsScreen,
    [TRENDING_POSTS]: PostsScreen,
    [POSTS_BY_TOPIC]: PostsScreen,
    [SINGLE_POST]: SinglePostScreen,
    [PROFILE_PAGE]: ProfileScreen,
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
    [PROFILE_PAGE]: ProfileScreen,
  },
  {
    initialRouteName: TOPICS_LIST,
    navigationOptions: defaultNavigationOptions,
  },
);

const NewPostStack = createStackNavigator(
  {
    [NEW_POST]: NewPostScreen,
  },
  {
    initialRouteName: NEW_POST,
    navigationOptions: defaultNavigationOptions,
  },
);

const ProfileStack = createStackNavigator(
  {
    [PROFILE_PAGE]: ProfileScreen,
    [SINGLE_POST]: SinglePostScreen,
  },
  {
    initialRouteName: PROFILE_PAGE,
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

const BottomTabStack = createBottomTabNavigator(
  {
    [HOME]: HomeStack,
    [POSTS]: PostsStack,
    [NEW_POST]: {
      screen: NewPostStack,
      navigationOptions: ({navigation}) => ({
        tabBarButtonComponent: () => <NewButton navigation={navigation} />,
      }),
    },
    [TOPICS]: TopicsStack,
    [PROFILE]: {
      screen: ProfileStack,
      navigationOptions: ({navigation}) => ({
        tabBarOnPress: ({navigation, defaultHandler}) => {
          const currentUser = store.getState().user.id;

          if (currentUser) {
            store.dispatch(fetchProfilePosts(currentUser));
            navigation.navigate(PROFILE);
          } else {
            navigation.navigate(LOGIN);
          }
        },
      }),
    },
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let icon;

        if (routeName === HOME) icon = '🏠';
        else if (routeName === POSTS) icon = '💬';
        else if (routeName === TOPICS) icon = '📚';
        else if (routeName === PROFILE) icon = '👤';

        return <Text style={{fontSize: 18}}>{icon}</Text>;
      },
    }),
    initialRouteName: HOME,
    tabBarOptions: {
      activeTintColor: MAIN_COLOR_DARKER,
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 14,
      },
    },
  },
);

const RootStack = createSwitchNavigator(
  {
    [HOME]: BottomTabStack,
    [AUTH]: AuthStack,
  },
  {
    initialRouteName: HOME,
    resetOnBlur: false,
    backBehavior: 'initialRoute',
  }
);

export default RootStack;