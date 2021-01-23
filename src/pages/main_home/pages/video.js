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
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import G_Text from '@/pages/component/G_Text';
import MyTabBar from '@/pages/component/G_Custom_Tab';
import Video from 'react-native-video';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgObjHg: 0,
      tabNames: ['主页', '分类', '她他群','我的', '主页', '分类', '她他群','我的'],
      tabIconNames: ['ios-home', 'ios-grid',  'logo-buffer', 'ios-contact'],
      value: '',
    };
    this.onChangeText = this.onChangeText.bind(this);
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
    let myHeight = Math.floor((screenWidth - 24) / width * height);
    console.log(myHeight)
    this.setState({
      imgObjHg: myHeight / 1,
    });
  }

  render() {
    let tabNames = this.state.tabNames;
    let tabIconNames = this.state.tabIconNames;
    let {value} = this.state;
    return (
      <View style={{flex: 1}}>
        {/*4ba8a1*/}
        <View style={{backgroundColor: '#4ba8a1', flexDirection: 'row', alignItems: 'center', paddingLeft: 12, paddingRight: 12, paddingTop: 12}}>
          <View>
            <Image source={require('@/assets/images/logo_ico.png')} style={{width: 40, height: 40}}/>
          </View>
          <View style={{marginLeft: 12, marginRight: 12}}>
            <Text style={{color: '#fff'}}>24/10 ℃</Text>
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
        </View>
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
          <View tabLabel='推荐'>
            <View style={{}}>
              <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                {/*循环*/}
                <View style={{backgroundColor: '#fff', padding: 12}}>
                  <View style={{paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: '#eee', }}>
                    <G_Text tWeight="bold" tColor='#333333' tSize={14} tTitle="日本人发明的故乡税，值得我们借鉴吗？"></G_Text>
                    <Text style={{color: '#999', marginTop: 6, fontSize: 12,}}>老妪宽大山 14小时前</Text>
                    <View style={{flexDirection: 'row', marginTop: 6, height: 200}}>
                      <Video  source={{uri: "https://vd3.bdstatic.com/mda-kk2m55fbckk77ajm/sc/mda-kk2m55fbckk77ajm.mp4?v_from_s=nj_videoui_4135&auth_key=1610774389-0-0-902c0fbfeb2113e46f3a6a8211a07e0d&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=8656_2-8811_4"}}   // Can be a URL or a local file.
                        // Store reference
                              ref={(ref) => {
                                this.player = ref
                              }}
                              onLoad={() => {
                                this.player.seek(200)
                              }}
                              style={styles.backgroundVideo} />
                    </View>
                  </View>
                  <View style={{paddingBottom: 12, marginTop: 12 }}>
                    <G_Text tWeight="bold" tColor='#333333' tSize={14} tTitle="日本人发明的故乡税，值得我们借鉴吗？"></G_Text>
                    <Text style={{color: '#999', marginTop: 6, fontSize: 12,}}>老妪宽大山 14小时前</Text>
                    <View style={{flexDirection: 'row', marginTop: 6, height: 200}}>
                      <Video  source={{uri: "https://vd3.bdstatic.com/mda-kk2m55fbckk77ajm/sc/mda-kk2m55fbckk77ajm.mp4?v_from_s=nj_videoui_4135&auth_key=1610774389-0-0-902c0fbfeb2113e46f3a6a8211a07e0d&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=8656_2-8811_4"}}   // Can be a URL or a local file.
                        // Store reference
                              ref={(ref) => {
                                this.player = ref
                              }}
                              onLoad={() => {
                                this.player.seek(200)
                              }}
                              style={styles.backgroundVideo} />
                    </View>
                  </View>
                  <View style={{paddingBottom: 12, marginTop: 12  }}>
                    <G_Text tWeight="bold" tColor='#333333' tSize={14} tTitle="日本人发明的故乡税，值得我们借鉴吗？"></G_Text>
                    <Text style={{color: '#999', marginTop: 6, fontSize: 12,}}>老妪宽大山 14小时前</Text>
                    <View style={{flexDirection: 'row', marginTop: 6, height: 200}}>
                      <Video  source={{uri: "https://vd3.bdstatic.com/mda-kk2m55fbckk77ajm/sc/mda-kk2m55fbckk77ajm.mp4?v_from_s=nj_videoui_4135&auth_key=1610774389-0-0-902c0fbfeb2113e46f3a6a8211a07e0d&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=8656_2-8811_4"}}   // Can be a URL or a local file.
                        // Store reference
                              ref={(ref) => {
                                this.player = ref
                              }}
                              onLoad={() => {
                                this.player.seek(200)
                              }}
                              style={styles.backgroundVideo} />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View tabLabel='热点'>
            <Text>Tab2</Text>
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    backgroundColor: '#ccc'
  },
});

export default Home;
