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
  TextInput, Animated,
} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import MyTabBar from '@/pages/component/G_Custom_Tab';
import FlatDataList from '@/pages/component/flatList/index';
import G_Text from '@/pages/component/G_Text';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgObjHg: 0,
      tabNames: ['主页', '分类', '她他群','我的', '主页', '分类', '她他群','我的'],
      tabIconNames: ['ios-home', 'ios-grid',  'logo-buffer', 'ios-contact'],
      value: '',
      headerTop: new Animated.Value(0),
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.animatedEvent = Animated.event([
      {
        nativeEvent: {
          contentOffset: { y: this.state.headerTop}
        }
      }
    ])
  }

  onChangeText() {

  }

  componentDidMount() {
    SplashScreen.hide();

    this.props.navigation.addListener('focus', () => {
      StatusBar.setHidden(false);
      StatusBar.setBackgroundColor('#4ba8a1');
      StatusBar.setBarStyle('light-content');
    })
    // 计算图片高度
    let imageObj = Image.resolveAssetSource(require("@/assets/images/news-img.jpg"));

    let { width, height } = imageObj;
    let myHeight = Math.floor((screenWidth - 24 - 12) / width * height);
    console.log(myHeight)
    this.setState({
      imgObjHg: myHeight / 3,
    });
  }

  render() {
    let tabNames = this.state.tabNames;
    let tabIconNames = this.state.tabIconNames;
    let {value} = this.state;
    const top = this.state.headerTop.interpolate({
      inputRange: [0, 110, 120, 130],
      outputRange: [0, -60, -60, -60]
    })
    return (
      <View style={{flex: 1}}>
        {/*4ba8a1*/}
        <Animated.View>
          <View style={{backgroundColor: '#4ba8a1', flexDirection: 'row', alignItems: 'center', paddingLeft: 12, paddingRight: 12, paddingTop: 12}}>
            <View style={{borderWidth: 0.5, borderColor: '#ccc', height: 26, width: 26, alignItems: 'center',  justifyContent: 'center', backgroundColor: '#fff'}}>
              <Image  source={require('@/assets/images/logo_ico.png')} style={{width: 20, height: 20,}}/>
            </View>
            <View style={{marginLeft: 6, marginRight: 6, flexDirection: 'row', alignItems: 'center'}}>
              <Image source={{uri: 'https://h5tq.moji.com/tianqi/assets/images/weather/w2.png'}} style={{width: 30, height: 30}}/>
              <Text style={{color: '#fff'}}>10 ℃</Text>
            </View>
            <View style={{flex: 1}}>
              <TextInput
                style={{ height: 32, borderColor: 'gray', borderWidth: 0, color: '#f00', padding: 0, paddingLeft: 12, paddingRight: 12, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 32,}}
                onChangeText={text => this.onChangeText(text)}
                value={value}
                placeholder='上海建议就地过年'
                placeholderTextColor='#fff'
              />
            </View>
            <View style={{marginLeft: 12}}>
              <FontAwesome name='camera' size={16} color='#fff' />
            </View>
          </View>
        </Animated.View>
          <Animated.View style={{ flex: 1,}}>
            <ScrollableTabView
              style={{}}
              tabBarPosition='top'//tabBarPosition默认top  位于屏幕顶部   bottom位于屏幕底部  overlayTop悬浮在顶部
              initialPage={0} //初始化时被选中的Tab下标，默认是0
              locked={false}//表示手指是否能拖动视图  默认false  true则不能拖动,只可点击
              //renderTabBar={() => <ScrollableTabBar />}
              renderTabBar={() => <MyTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
              tabBarUnderlineStyle={{backgroundColor: '#fff'}}//设置DefaultTabBar和ScrollableTabBarTab选中时下方横线的颜色
              tabBarBackgroundColor='#4ba8a1'//设置整个Tab这一栏的背景颜色
              tabBarActiveTextColor='#fff'//设置选中Tab的文字颜色
              tabBarInactiveTextColor='#fff'//设置未选中Tab的文字颜色
              tabBarTextStyle={{fontSize: 14}}//设置Tab文字的样式
              onChangeTab={(obj) => {//Tab切换之后会触发此方法
                console.log('index:' + obj.i);
              }}
              onScroll={(postion) => {  //视图正在滑动的时候触发此方法
                // float类型 [0, tab数量-1]
                console.log('scroll position:' + postion);
              }}
            >
              <View tabLabel='推荐' style={{flex: 1, backgroundColor: '#fff',}}>
                 <FlatDataList
                   //隐藏水平
                   onScroll={this.animatedEvent} navigation={this.props.navigation}/>
              </View>
              <View tabLabel='热点' style={{flex: 1, backgroundColor: '#fff',}}>
                <FlatDataList
                  //隐藏水平
                  onScroll={this.animatedEvent}/>
              </View>
              <View tabLabel='搞笑'>
                <Text>Tab3</Text>
              </View>
              <View tabLabel='视频'>
                <Text>Tab4</Text>
              </View>
              <View tabLabel='社会'>
                <Text>Tab5</Text>
              </View>
              <View tabLabel='娱乐'>
                <Text>Tab6</Text>
              </View>
              <View tabLabel='科技'>
                <Text>Tab7</Text>
              </View>
            </ScrollableTabView>
          </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  tabCss: {
    flexDirection: 'row',
    backgroundColor: '#4ba8a1',
  },
  tabChildCss: {
    margin: 12,
    flexBasis: 'auto',
    // marginLeft: 12,
  },
  whiteText: {
    color: '#fff',
  },
});

export default Home;
