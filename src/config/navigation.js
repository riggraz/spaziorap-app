import React from 'react';
import {Text} from 'react-native';
import {
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
    Posts: PostsScreen,
  },
  {
    initialRouteName: 'Posts',
    navigationOptions: defaultNavigationOptions,
  },
);

const TopicsStack = createStackNavigator(
  {
    Topics: TopicsScreen,
  },
  {
    initialRouteName: 'Topics',
    navigationOptions: defaultNavigationOptions,
  },
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Registration: RegistrationScreen,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: defaultNavigationOptions,
  },
);

const RootStack = createBottomTabNavigator(
  {
    Posts: PostsStack,
    Topics: TopicsStack,
    Auth: AuthStack,
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let icon;

        if (routeName === 'Posts') icon = '📖';
        if (routeName === 'Topics') icon = '📚';
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