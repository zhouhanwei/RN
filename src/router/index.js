import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '@/pages/login';
import MainHome from '@/pages/main_home/index';
//import ArticleDetails from '@/pages/browseCollection';
import ArticleDetails from '@/pages/main_home/pages/acticleDetails';
import codePush from "react-native-code-push";
const options = { checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME };
const Stack = createStackNavigator();

class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    // codePush.sync({
    //   updateDialog: true,
    //   installMode: codePush.InstallMode.IMMEDIATE,
    //   mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
    //   //deploymentKey为刚才生成的,用Platform判断下平台
    //   deploymentKey: Platform.OS === 'ios'?'sYvpLUxuBU9FxICqJ5sccL2GDUPZcc988a73-c917-4dba-bd40-1837998442a6':'YikLUGfsYszubMwVIO4Y_P4XOAYltxC0xXczn',
    // });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitle: "Home",
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
          <Stack.Screen
            name="ArticleDetails"
            component={ArticleDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
      )
  }
}

export default codePush(options)(Route);
