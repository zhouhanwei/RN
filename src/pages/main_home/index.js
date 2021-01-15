import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StatusBar,
  Button,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  Animated,
  Easing,
  TouchableOpacity,
  Alert
} from 'react-native';

import HomeIndex from '../main_home/pages/index';

const Tab = createBottomTabNavigator();

function DetailsScreen() {
  return (
    <View>
      <Text>111111</Text>
    </View>
  )
}

function DetailsScreen1() {
  return (
    <View>
      <Text>22222</Text>
    </View>
  )
}

class MainHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // tabBarIcon: ({ focused, color, size }) => {
            //   let iconName;
            //
            //   if (route.name === 'Home') {
            //     iconName = focused
            //       ? 'ios-information-circle'
            //       : 'ios-information-circle-outline';
            //   } else if (route.name === 'Settings') {
            //     iconName = focused ? 'ios-list-box' : 'ios-list';
            //   }
            //
            //   // You can return any component that you like here!
            //   return <Ionicons name={iconName} size={size} color={color} />;
            // },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomeIndex} />
          <Tab.Screen name="Settings" component={DetailsScreen1} />
        </Tab.Navigator>
    )
  }
}

export default MainHome;
