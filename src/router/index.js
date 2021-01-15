import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../pages/login';
import MainHome from '@/pages/main_home/index';
const Stack = createStackNavigator();

export  default class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitle: "主页",
            headerStyle: {
              height: 0,
              opacity: 0,
            },
            ...TransitionPresets.SlideFromRightIOS
          }}
        >
          <Stack.Screen
            name="主页"
            component={MainHome}
          />
          <Stack.Screen
            name="登录注册"
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
      )
  }
}
