import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Button,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  Alert,
  TextInput,
  TouchableHighlight
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText() {

  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    let {userName} = this.state;
    return (
      <View style={{flex:1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="#fff" barStyle="light-content" hidden={false}/>
        <View style={{alignItems: 'center', width: '100%'}}>
          <Image source={require('../assets/images/logo_ico.png')} style={{width: 70, height: 70}}/>
          <Text style={{width: '60%', textAlign: 'center', color: '#999', marginTop: 12}}>登录后即可关注、发表评论同步收藏和浏览记录</Text>
        </View>
        <View style={{flex: 1, padding: 40, paddingTop: 60}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome name="user" size={16} color={'#ccc'} />
            <TextInput
              style={{ flex: 1, marginLeft: 12, height: 32, borderColor: '#ccc', borderWidth: 0, borderBottomWidth: 1, color: '#f00', padding: 0, backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
              onChangeText={text => this.onChangeText(text)}
              value={userName}
              placeholder='请输入手机号'
              placeholderTextColor='#999'
            />
          </View>
          <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome name="unlock-alt" size={16} color={'#ccc'} />
            <TextInput
              style={{ flex: 1,height: 32,  marginLeft: 12, borderColor: '#ccc', borderWidth: 0, borderBottomWidth: 1, color: '#f00', padding: 0, backgroundColor: 'rgba(255, 255, 255, 0.3)',}}
              onChangeText={text => this.onChangeText(text)}
              value={userName}
              placeholder='请输入密码A'
              placeholderTextColor='#999'
            />
          </View>
          <View style={{marginTop: 22}}>
            <TouchableHighlight>
              <View style={{backgroundColor: '#4ba8a1', height: 36, borderColor: '#ccc', borderWidth: 1, justifyContent: 'center'}}>
                <Text style={{color: '#FFF', textAlign: 'center'}}>登录</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{marginTop: 12}}>
            <TouchableHighlight>
              <View style={{backgroundColor: '#fff', height: 36, borderColor: '#ccc', borderWidth: 1, justifyContent: 'center'}}>
                <Text style={{color: '#777777', textAlign: 'center'}}>注册</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 30, paddingTop: 20}}>
          <Text style={{color: '#999'}}>登录或注册即同意'建湖人'用户服务协议</Text>
        </View>
      </View>
    );
  }
}
