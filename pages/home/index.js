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
import G_Text from '../component/G_Text';
import MyTabBar from '../component/G_Custom_Tab';

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

    // 计算图片高度
    let imageObj = Image.resolveAssetSource(require("../../src/assets/images/news-img.jpg"));

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
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#4ba8a1" barStyle="light-content" hidden={false}/>
        <View style={{backgroundColor: '#4ba8a1', flexDirection: 'row', alignItems: 'center', paddingLeft: 12, paddingRight: 12}}>
          <View>
            <Image source={require('../../src/assets/images/logo_ico.png')} style={{width: 40, height: 40}}/>
          </View>
          <View style={{marginLeft: 12, marginRight: 12}}>
            <Text>24/10 ℃</Text>
          </View>
          <View style={{flex: 1}}>
            <TextInput
              style={{ height: 36, borderColor: 'gray', borderWidth: 0, color: '#f00', padding: 0, backgroundColor: 'rgba(255, 255, 255, 0.3)', borderRadius: 16,}}
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
                {/*置顶*/}
                <View style={{backgroundColor: '#fff', padding: 12}}>
                  <G_Text tWeight="bold" tColor='#333333' tSize={16} tTitle="习近平总书记对政法工作重要指示在公安部直属机关和各地公安机关引发热烈反响"></G_Text>
                  <View style={{flexDirection: 'row', marginTop: 6, alignItems: 'center'}}>
                    <Text style={{borderColor: '#f00', fontSize: 10, borderWidth: 1, color: '#f00', paddingTop: 1, paddingRight: 4, paddingLeft: 4, paddingBottom: 1, borderRadius: 6}}>置顶</Text>
                    <Text style={{marginLeft: 6}}>腾讯新闻</Text>
                  </View>
                  <View style={{marginTop: 6}}>
                    <Text style={{color: '#999'}}>北港青年 昨天 11:35</Text>
                  </View>
                </View>
                {/*top1*/}
                <View style={{backgroundColor: '#fff', padding: 12, marginTop: 12}}>
                  <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 12}}>
                    <View style={{width: '100%', flex: 1, marginRight: 6,}}>
                      <Image source={require("../../src/assets/images/news-img.jpg")} style={{ width: '100%', flex: 1, marginRight: 6 , height: this.state.imgObjHg, borderRadius: 10}} />
                    </View>
                    <View style={{flex: 2, marginLeft: 6}}>
                      <G_Text tWeight="bold" tColor='#333333' tSize={16} tTitle="中国军工正改进歼-20“心脏”，直到其可以匹敌F-22"></G_Text>
                      <Text style={{color: '#999', marginTop: 6}}>海外网 12:33:25</Text>
                    </View>
                  </View>
                  {/*2-3*/}
                  <View style={{flexDirection: 'row', paddingTop: 12}}>
                    <View style={{flex: 1}}>
                      <G_Text tWeight="bold" tColor='#333333' tSize={16} tTitle="印尼确认首名空难遇难者身份"></G_Text>
                      <Text style={{color: '#999', marginTop: 6}}>全球日报 昨天23:15</Text>
                    </View>
                    <View style={{width: 1, height: '100%', backgroundColor: '#eee', marginLeft: 6, marginRight: 6}}>
                    </View>
                    <View  style={{flex: 1}}>
                      <G_Text tWeight="bold" tColor='#333333' tSize={16} tTitle="日本人发明的故乡税，值得我们借鉴吗？"></G_Text>
                      <Text style={{color: '#999', marginTop: 6}}>知心网 昨天08:35</Text>
                    </View>
                  </View>
                </View>
                {/*循环*/}
                <View style={{backgroundColor: '#fff', padding: 12, marginTop: 12}}>
                  <View style={{paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: '#eee', }}>
                    <G_Text tWeight="bold" tColor='#333333' tSize={16} tTitle="日本人发明的故乡税，值得我们借鉴吗？"></G_Text>
                    <Text style={{color: '#999', marginTop: 6}}>老妪宽大山 14小时前</Text>
                    <View style={{flexDirection: 'row', marginTop: 6}}>
                      <Image source={require("../../src/assets/images/news-img.jpg")} style={{ width: '100%', flex: 1, marginRight: 6 , height: this.state.imgObjHg, borderRadius: 10}} />
                      <Image source={require("../../src/assets/images/news-img.jpg")} style={{ width: '100%', flex: 1, marginRight: 6 , height: this.state.imgObjHg, borderRadius: 10}} />
                      <Image source={require("../../src/assets/images/news-img.jpg")} style={{ width: '100%', flex: 1, marginRight: 6 , height: this.state.imgObjHg, borderRadius: 10}} />
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#eee', paddingTop: 12, paddingBottom: 12}}>
                    <View style={{width: '100%', flex: 1, marginRight: 6,}}>
                      <Image source={require("../../src/assets/images/news-img.jpg")} style={{ width: '100%', flex: 1, marginRight: 6 , height: this.state.imgObjHg, borderRadius: 10}} />
                    </View>
                    <View style={{flex: 2, paddingLeft: 6, boxSizing: 'border-box'}}>
                      <G_Text tWeight="bold" tColor='#333333' tSize={16} tTitle="中国军工正改进歼-20“心脏”，直到其可以匹敌F-22"></G_Text>
                      <Text style={{color: '#999', marginTop: 6}}>海外网 12:33:25</Text>
                    </View>
                  </View>
                  <View style={{paddingBottom: 12, paddingTop: 12, borderBottomWidth: 1, borderBottomColor: '#eee', }}>
                    <G_Text tWeight="bold" tColor='#333333' tSize={16} tTitle="日本人发明的故乡税，值得我们借鉴吗？"></G_Text>
                    <Text style={{color: '#999', marginTop: 6}}>老妪宽大山 14小时前</Text>
                    <View style={{flexDirection: 'row', marginTop: 6}}>
                      <Image source={require("../../src/assets/images/news-img.jpg")} style={{ width: '100%', flex: 1, marginRight: 6 , height: this.state.imgObjHg, borderRadius: 10}} />
                      <Image source={require("../../src/assets/images/news-img.jpg")} style={{ width: '100%', flex: 1, marginRight: 6 , height: this.state.imgObjHg, borderRadius: 10}} />
                      <View style={{flex: 1,}}></View>
                    </View>
                  </View>
                  <View style={{paddingBottom: 12, paddingTop: 12, }}>
                    <G_Text tWeight="bold" tColor='#333333' tSize={16} tTitle="日本人发明的故乡税，值得我们借鉴吗？"></G_Text>
                    <Text style={{color: '#999', marginTop: 6}}>老妪宽大山 7小时前</Text>
                    <View style={{flexDirection: 'row', marginTop: 6}}>
                      <Image source={require("../../src/assets/images/news-img.jpg")} style={{ width: '100%', flex: 1, marginRight: 6 , height: this.state.imgObjHg, borderRadius: 10}} />
                      <Image source={require("../../src/assets/images/news-img.jpg")} style={{ width: '100%', flex: 1, marginRight: 6 , height: this.state.imgObjHg, borderRadius: 10}} />
                      <Image source={require("../../src/assets/images/news-img.jpg")} style={{ width: '100%', flex: 1, marginRight: 6 , height: this.state.imgObjHg, borderRadius: 10}} />
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
        {/*<View style={{height: 46}}>*/}
        {/*  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>*/}
        {/*    <View style={styles.tabCss}>*/}
        {/*      <View style={styles.tabChildCss}>*/}
        {/*        <Text style={styles.whiteText}>推荐</Text>*/}
        {/*      </View>*/}
        {/*      <View style={styles.tabChildCss}>*/}
        {/*        <Text style={styles.whiteText}>热点</Text>*/}
        {/*      </View>*/}
        {/*      <View style={styles.tabChildCss}>*/}
        {/*        <Text style={styles.whiteText}>搞笑</Text>*/}
        {/*      </View>*/}
        {/*      <View style={styles.tabChildCss}>*/}
        {/*        <Text style={styles.whiteText}>视频</Text>*/}
        {/*      </View>*/}
        {/*      <View style={styles.tabChildCss}>*/}
        {/*        <Text style={styles.whiteText}>社会</Text>*/}
        {/*      </View>*/}
        {/*      <View style={styles.tabChildCss}>*/}
        {/*        <Text style={styles.whiteText}>娱乐</Text>*/}
        {/*      </View>*/}
        {/*      <View style={styles.tabChildCss}>*/}
        {/*        <Text style={styles.whiteText}>科技1</Text>*/}
        {/*      </View>*/}
        {/*    </View>*/}
        {/*  </ScrollView>*/}
        {/*</View>*/}
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
