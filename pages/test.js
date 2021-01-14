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
  Alert,
  TouchableHighlight,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { WebView } from 'react-native-webview';   // 0.6后独立出去

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null,
  },
  signup: {
    backgroundColor: '#f00',
    marginBottom: 15,
  }
});


class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: 'https://www.apple.com',
    }
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  login() {
    Alert.alert('登录');
  }

  render() {
    return (
      <View style={{flexGrow: 1}}>
        {/*<Image style={[styles.container, styles.bg]} source={require("../src/assets/images/news-img.jpg")} resizeMode="cover">*/}
        {/*</Image>*/}
        <View style={{flexGrow: 3}}>
          <WebView
            automaticallyAdjustContentInsets={false}
            source={{
              uri: this.state.url,
            }}
            javaScriptEnabled={true}
            domStorangeEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            scalesPageToFit={true}
            onNavigationStateChange={() => {
              Alert.alert('onNavigationStateChange');
              this.setState({
                url: 'https://www.baidu.com',
              })
            }}
            onShouldStartLoadWithRequest={() => {
              Alert.alert('onShouldStartLoadWithRequest');
              return true;
            }}
          />
        </View>
        <View style={{flexGrow: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
          <TouchableHighlight onPress={this.login.bind(this)}>
            <View style={styles.signup}>
              <Text style={{color: '#FFF'}}>注册Abbbb</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Test;
