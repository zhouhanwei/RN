import React, { Component } from 'react';
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
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1FB9FF'
  },
});

function NewsDetails({navigation, route}) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>【女神驾道】美女主持人携手丰田荣放自驾甘南冰雪奇缘之旅</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again1231324234232"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

class HomeScreen1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      animatedValue: new Animated.Value(0),
      springValue: new Animated.Value(1),  // 弹簧
      headerTop: new Animated.Value(0), // 初始化用到的动画变量
      headerOpacity: new Animated.Value(1), // 初始化用到的动画变量
    }

    this.rotateAnimated = Animated.timing(
      this.state.animatedValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.in,
      }
    );

    this.springAnimated = Animated.spring(
      this.state.springValue,
      {
        toValue: 1,
        friction: 2,    //弹跳系数
        tension: 10,   // 控制速度
      }
    );

    this.animatedEvent = Animated.event([
      {
        nativeEvent: {
          contentOffset: { y: this.state.headerTop },
          opacity: this.state.headerOpacity,
        }
      }
    ])
  }

  _startAnimatedTop() {
    Alert.alert("234")
    //return this.animatedEvent;
  }

  _startAnimated2() {
    this.state.springValue.setValue(0);
    //this.springAnimated.start();
    // 动画循环
    this.springAnimated.start(() => this._startAnimated2());
  }

  _startAnimated() {
    this.state.animatedValue.setValue(0);
    this.rotateAnimated.start(() => this._startAnimated());
  }


  render(){

    const rotateZ = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    const opacity = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });

    const opacity1 = this.state.headerOpacity.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });

    const rotateX = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    });

    const textSize = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    });

    const marginLeft = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 200, 0]
    });

    const topA = this.state.headerTop.interpolate({
      inputRange: [0, 100, 120, 123],
      outputRange: [0, -50, -50, -50]
    })

    return (
      <View style={{flex: 1,}}>
        <Animated.View style={{ top: topA, opacity: opacity1 }}>
          <View style={{height: 50, backgroundColor: "#f00"}}>
            <Text style={styles.text}>linshuirong.cn</Text>
          </View>
        </Animated.View>
        <Animated.View style={{ top: topA }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={this.animatedEvent}
        >
        <Animated.Text
          style={{
            marginTop: 10,
            width:100,
            fontSize: 18,
            color: 'white',
            backgroundColor:'red',
            transform: [
              {rotateX:rotateX},
            ]
          }}
        >
          {this.state.topA}
        </Animated.Text>

        <Animated.Text
          style={{
            marginTop: 10,
            height: 100,
            lineHeight: 100,
            fontSize: textSize,
            color: 'red'
          }}
        >
          IAMCJ嘿嘿嘿
        </Animated.Text>

        <Animated.View
          style={{
            marginTop: 10,
            width: 100,
            height: 100,
            transform: [
              {translateY: marginLeft}
            ],
            backgroundColor:'red',
          }}
        />

        <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
          <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated2.bind(this)}>
          <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画22</Text>
        </TouchableOpacity>
        <Animated.View
          style={{
            width: 282,
            height: 51,
            transform:[
              {scale:this.state.springValue}
            ]
          }}
        >
          <Text>BBBBBBBBBBBAAAAACCCCrrrr</Text>
        </Animated.View>
          <View style={{flexDirection: "row", paddingBottom: 12, paddingTop: 12, borderBottomWidth: 1, borderBottomColor: "#ccc"}}>
            <View>
              <Image source={require("../src/assets/images/news-img.jpg")} style={{ width: 100, height: 75}} />
            </View>
            <View style={{paddingLeft: 12, flex: 1}}>
              <Text style={{fontSize: 14, fontWeight: "bold"}}>【女神驾道】美女主持人携手丰田荣放自驾甘南冰雪...</Text>
              <Text>豪横的程度堪比盛筵，这也是后来我们听一位神秘的同行小伙伴提及的没关系！所以...</Text>
            </View>
          </View>
          <View style={{flexDirection: "row", paddingBottom: 12, paddingTop: 12, borderBottomWidth: 1, borderBottomColor: "#ccc"}}>
            <View>
              <Image source={require("../src/assets/images/news-img.jpg")} style={{ width: 100, height: 75}} />
            </View>
            <View style={{paddingLeft: 12, flex: 1}}>
              <Text style={{fontSize: 14, fontWeight: "bold"}}>【女神驾道2】美女主持人携手丰田荣放自驾甘南冰雪...</Text>
              <Text>豪横的程度堪比盛筵，这也是后来我们听一位神秘的同行小伙伴提及的没关系！所以...</Text>
            </View>
          </View>
          <View style={{flexDirection: "row", paddingBottom: 12, paddingTop: 12, borderBottomWidth: 1, borderBottomColor: "#ccc"}}>
            <View>
              <Image source={require("../src/assets/images/news-img.jpg")} style={{ width: 100, height: 75}} />
            </View>
            <View style={{paddingLeft: 12, flex: 1}}>
              <Text style={{fontSize: 14, fontWeight: "bold"}}>【女神驾道3】美女主持人携手丰田荣放自驾甘南冰雪...</Text>
              <Text>豪横的程度堪比盛筵，这也是后来我们听一位神秘的同行小伙伴提及的没关系！所以...</Text>
            </View>
          </View>
        </ScrollView>
        </Animated.View>

      </View>
    );
  }
}


function HomeScreen({ navigation }) {
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
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={HomeScreen1} />
      <Tab.Screen name="Settings" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again12"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function LogoTitle() {
  return (
    <View>
      <Text style={{textAlign: "center", color: "#f00"}}>423423</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    // return (
    //   <View>
    //     <NavigationContainer>
    //       <Stack.Navigator>
    //         <Stack.Screen name="Home" component={HomeScreen} />
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //     <StatusBar backgroundColor="blue" barStyle="light-content" hidden={false}/>
    //     <Text>{JSON.stringify(data)}</Text>
    //   </View>
    // );
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
           screenOptions={{
             headerStyle: {
               backgroundColor: '#f4511e',
               height: 0,
             },
             headerTintColor: '#fff',
             headerTitleStyle: {
               fontWeight: 'bold',
             },
             ...TransitionPresets.SlideFromRightIOS
           }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              //headerTransparent: true,
              headerTitle: "AAA",
              headerStyle: {
                backgroundColor: '#f00',
                height: 0,
              },
            //   headerTitle: props => <LogoTitle {...props}/>,
            //   headerTitleStyle: {
            //     fontWeight: 'bold',
            //     fontSize: 100
            //   },
            //   headerStyle: {
            //     backgroundColor: '#f4511e',
            //   },
            //   headerRight: () => (
            //     <Button
            //       onPress={() => alert('This is a button!')}
            //       title="Info"
            //       color="#fff"
            //     />
            //   ),
            //   headerLeft: () => (
            //     <Button
            //       onPress={() => alert('This is a button!')}
            //       title="Info"
            //       color="#fff"
            //     />
            //   ),
             }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              title: "23",
            }}
          />
          <Stack.Screen
            name="NewsDetails"
            component={NewsDetails}
            options={{
              title: "223",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
//
// <View style={styles.container}>
//   <StatusBar translucent={true} backgroundColor={'blue'} />
// </View>
