import React, {Component} from "react";
import { FlatList, Text, View, StyleSheet, Image, Dimensions, Platform, ScrollView, TouchableHighlight, Modal, Alert } from "react-native";
import G_Text from '@/pages/component/G_Text';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 50
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 0,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default class ActicleDetails extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.goTo = this.goTo.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }
  goTo() {
    this.props.navigation.goBack();
  }
  setModalVisible(value) {
    this.setState({
      modalVisible: value
    })
  }


  render() {
    let {modalVisible} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(false);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <View style={{ height: 50, paddingLeft: 12, paddingRight: 12, borderColor: '#ccc', borderBottomWidth: 1, flexDirection: 'row'}}>
          <View style={{flex: 1,  justifyContent: 'center', alignItems: 'flex-start'}}>
            <TouchableHighlight onPress={this.goTo}>
              <FontAwesome name='angle-left' size={22} color='#000' />
            </TouchableHighlight>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <TouchableHighlight  onPress={() => {
              this.setModalVisible(true);
            }}>
              <FontAwesome name='bars' size={16} color='#000' />
            </TouchableHighlight>
          </View>
        </View>
        <View style={{flex: 1}}>
          <ScrollView
            showsHorizontalScrollIndicator = {false}
            //隐藏垂直
            showsVerticalScrollIndicator = {false}>
            <View style={{flex: 1,  padding: 12}}>
              <G_Text tWeight="bold" tColor='#333333' tSize={16} tTitle={'多位院士、教授论文涉嫌造假？科技部通报'}></G_Text>
              <View style={{marginTop: 6}}>
                <View style={{width: 20, height: 3, backgroundColor: '#f00'}}></View>
                <Text style={{marginTop: 6, fontSize: 10}}>網易新聞 2小時前</Text>
              </View>
              <View style={{marginTop: 12}}>
                <Text>经联合工作机制审议，决定取消曹雪涛院士申报国家科技计划项目资格1年，取消作为财政资金支持的科技活动评审专家资格1年，取消招收研究生资格1年，责成其对被质疑的论文回应质疑并进行勘误，对存在的问题作出深刻检查，在工程院相应学部通报批评。</Text>
              </View>
              <View style={{marginTop: 12}}>
                <Image source={{uri: 'https://inews.gtimg.com/newsapp_bt/0/13069985816/1000'}} style={{width: '100%', height: 120}}/>
              </View>
              <View style={{marginTop: 12}}>
                <Text>
                  经联合工作机制审议，决定取消李红良教授申报国家科技计划项目资格2年，取消作为财政资金支持的科技活动评审专家资格2年，取消招收研究生资格2年，责成其对存在的问题作出深刻检查。
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{backgroundColor: '#f3f3f3', height: 50, flexDirection: 'row', alignItems: 'center', paddingLeft: 12, paddingRight: 12}}>
          <View style={{backgroundColor: '#fff', borderRadius: 20, paddingRight: 8, paddingLeft: 8, paddingTop: 4, paddingBottom: 4, flex: 1, alignItems: 'center'}}>
            <Text>搶發第一帖</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <FontAwesome name='commenting-o' size={16} color='#000' />
            </View>
            <View style={{alignItems: 'center',  }}>
              <FontAwesome name='star-o' size={16} color='#000' />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome name='share-square-o' size={16} color='#000' />
            </View>
          </View>
        </View>
      </View>
    );
  }
}