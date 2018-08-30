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
import NewButton from '../components/NewButton'; //bottomTab button
import NewPostMenuScreen from '../components/NewPostMenuScreen';
import NewTextPostScreen from '../components/NewPostScreens/NewTextPostScreen';
import NewYTPostScreen from '../components/NewPostScreens/NewYTPostScreen';

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

  NEW_POST_MENU,
    NEW_TEXT_POST,
    NEW_YT_POST,

  PROFILE,
  PROFILE_PAGE,

  AUTH,
    LOGIN,
    REGISTRATION,
} from '../constants/navigation';

//Imports used to fetch profile posts on bottom tab click
import store from './store';
import {fetchProfilePosts} from '../actions/requestProfilePosts';

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
    [HOME]: HomeScreen,
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
    [NEW_POST_MENU]: NewPostMenuScreen,
    [NEW_TEXT_POST]: NewTextPostScreen,
    [NEW_YT_POST]: NewYTPostScreen,
  },
  {
    initialRouteName: NEW_POST_MENU,
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
    [NEW_POST_MENU]: {
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
      activeTintColor: '#95190C',
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
    backBehavior: 'initialRoute',
  }
);

export default RootStack;