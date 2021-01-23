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
        <View style={{marginTop: 12, backgroundColor: '#fff', padding: 12}}>
          <Text>详情</Text>
        </View>
      </View>
    )
  }
}