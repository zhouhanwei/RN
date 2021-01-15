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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeIndex from '@/pages/main_home/pages/index';
import My from '@/pages/main_home/pages/my';

const Tab = createBottomTabNavigator();

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
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconColor;
              if (route.name === '首页') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === '我') {
                iconName = focused ? 'user' : 'user';
              }

              iconColor = focused ? '#4ba8a1' : 'gray';

              // You can return any component that you like here!
              return <FontAwesome name={iconName} size={16} color={iconColor} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#4ba8a1',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="首页" component={HomeIndex} />
          <Tab.Screen name="我" component={My} />
        </Tab.Navigator>
    )
  }
}

export default MainHome;
