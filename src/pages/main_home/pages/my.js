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
  TextInput, TouchableHighlight,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";


export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      StatusBar.setHidden(false);
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#fff');
    })
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <View style={{flex: 1,backgroundColor:'#f3f3f3'}}>
        <View style={{backgroundColor: '#fff', padding: 12}}>
          <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <View>
              <Image source={require('@/assets/images/head.jpg')} style={{width: 40, height: 40, borderRadius: 40, borderColor: '#ccc', borderWidth: 0.5}}/>
            </View>
            <View style={{marginLeft: 12, flex: 1}}>
              <Text style={{fontSize: 14}}>往事随风</Text>
              <Text style={{fontSize: 10, color: '#999'}}>暂无个人信息</Text>
            </View>
            <View>
              <TouchableHighlight>
                <FontAwesome name="angle-right" size={16} color={'#ccc'} />
              </TouchableHighlight>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20, marginTop: 40}}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <FontAwesome name="bell-o" size={26} color={'#4ba8a1'} />
              <Text style={{fontSize: 12}}>我的消息</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <FontAwesome name="star-o" size={26} color={'#4ba8a1'} />
              <Text style={{fontSize: 12}}>我的收藏</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <FontAwesome name="clock-o" size={26} color={'#4ba8a1'} />
              <Text style={{fontSize: 12}}>浏览记录</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 12, backgroundColor: '#fff', padding: 12}}>
          <Text>aaa</Text>
        </View>
      </View>
    )
  }
}