import React, {Component} from "react";
import { FlatList, Text, View, StyleSheet, Image, Dimensions, Platform,TouchableHighlight } from "react-native";
import G_Text from '@/pages/component/G_Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    flexDirection: 'row',
    padding: 12,
  },
  itemElse: {
    padding: 12,
  },
  pad: {
    padding: 12,
  }
});


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

function List(props) {
  const {data, imgObjHg}= props;
  if (data.uri.length == 3) {
    return (
      <View style={styles.itemElse}>
        <G_Text tWeight="bold" tColor='#333333' tSize={14} tTitle={data.title}></G_Text>
        <Text style={{color: '#999', marginTop: 6, fontSize: 12,}}>{data.auther} {data.time}</Text>
        <View style={{flexDirection: 'row', marginTop: 6}}>
          {
            data.uri.map((uri, key) => {
              return <Images uri={uri} imgObjHg={imgObjHg} key={key}/>
            })
          }
        </View>
      </View>
    )
  } else if (data.uri.length > 1 && data.uri.length < 3) {
    return (
      <View style={styles.itemElse}>
        <G_Text tWeight="bold" tColor='#333333' tSize={14} tTitle={data.title}></G_Text>
        <Text style={{color: '#999', marginTop: 6, fontSize: 12,}}>{data.auther} {data.time}小时前</Text>
        <View style={{flexDirection: 'row', marginTop: 6}}>
          {
            data.uri.map((uri, key) => {
              return <Images uri={uri} imgObjHg={imgObjHg} key={key}/>
            })
          }
          <View style={{flex: 1,}}></View>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.item}>
        <View style={{width: '100%', flex: 1, marginRight: 6,}}>
          <Images uri={data.uri[0]} imgObjHg={imgObjHg}/>
        </View>
        <View style={{flex: 2, paddingLeft: 6, boxSizing: 'border-box'}}>
          <G_Text tWeight="bold" tColor='#333333' tSize={14} tTitle={data.title}></G_Text>
          <Text style={{color: '#999', marginTop: 6, fontSize: 12,}}>{data.auther} {data.time}</Text>
        </View>
      </View>
    )
  }
}

function Images(props) {
  const {uri, imgObjHg} = props;
  return (
    <Image source={{uri: uri}} style={{ width: '100%', flex: 1, marginRight: 6 , height: imgObjHg, borderRadius: 10}} />
  )
}

export default class FlatDataList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgObjHg: 0
    };
    this.sepa = () => {
      return (<View style={{height:1,backgroundColor:'#ccc', marginLeft: 12, marginRight: 12}}></View>)
    }
    this.goTo = this.goTo.bind(this);
  }

  goTo() {
    this.props.navigation.navigate('ArticleDetails');
  }

  componentDidMount() {
    // 计算图片高度
    let imageObj = Image.resolveAssetSource(require("@/assets/images/news-img.jpg"));

    let { width, height } = imageObj;
    let myHeight = Math.floor((screenWidth - 24 - 12) / width * height);
    console.log(myHeight)
    this.setState({
      imgObjHg: myHeight / 3,
    });
  }
// style={[styles.container, styles.item]}
  render() {
    return (
      <View style={[styles.container]}>
        <FlatList
          data={[
            {
              key: 'Dan',
              title: '军方王牌倾巢出动，拼死激战只为夺回中国导弹，俄：从未有人干过',
              time: '4小时前',
              auther: '水镜晓先生',
              uri: ['http://inews.gtimg.com/newsapp_ls/0/13070779835_640330/0']
            },
            {
              key: 'Dominic',
              time: '4小时前',
              auther: '紫龙防务观察',
              title: '印度突然向边境增派坦克，莫迪获得外援后，底气十足？',
              uri: ['https://inews.gtimg.com/newsapp_ls/0/13070818925_485350/0', 'https://inews.gtimg.com/newsapp_ls/0/13070818929_485350/0', 'https://inews.gtimg.com/newsapp_ls/0/13070818933_485350/0']
            },
            {
              key: 'Dan',
              title: '军方王牌倾巢出动，拼死激战只为夺回中国导弹，俄：从未有人干过',
              time: '4小时前',
              auther: '水镜晓先生',
              uri: ['http://inews.gtimg.com/newsapp_ls/0/13070779835_640330/0']
            },
            {
              key: 'Dominic',
              time: '3小时前',
              auther: '冯善智观察',
              title: '印度烈火5导弹列装，巴铁针锋相对，试射沙欣3可覆盖印度全境',
              uri: ['https://inews.gtimg.com/newsapp_ls/0/13071248911_485350/0', 'https://inews.gtimg.com/newsapp_ls/0/13071248912_485350/0']
            },
            {
              key: 'Dominic',
              time: '1小时前',
              auther: '环球网军事',
              title: '美国民警卫队失窃悍马越野车已被找到 但窃贼尚未抓获',
              uri: ['http://inews.gtimg.com/newsapp_ls/0/13071695016_640330/0']
            },
            {
              key: 'Dominic',
              time: '2小时前',
              auther: '武器装备',
              title: '阅兵仪式上，3名士兵突然冲向观看台，总统当场被乱枪击毙',
              uri: ['http://inews.gtimg.com/newsapp_ls/0/13071360774_640330/0']
            },
          ]}
          ItemSeparatorComponent={this.sepa}
          onScroll={this.props.onScroll}
          showsHorizontalScrollIndicator = {false}
          //隐藏垂直
          showsVerticalScrollIndicator = {false}
          ListHeaderComponent = {(
            <View>
              {/*置顶*/}
              <View style={styles.pad}>
                <G_Text tWeight="bold" tColor='#333333' tSize={14} tTitle="美国与以色列打算搞慕尼黑阴谋？蓬佩奥与以色列密会，不知谈什么"></G_Text>
                <View style={{flexDirection: 'row', marginTop: 6, alignItems: 'center'}}>
                  <Text style={{borderColor: '#f00', borderWidth: 1, fontSize: 8, color: '#f00', paddingRight: 2, paddingLeft: 2,  borderRadius: 4}}>置顶</Text>
                  <Text style={{marginLeft: 6, fontSize: 12}}>腾讯新闻</Text>
                </View>
                <View style={{marginTop: 6}}>
                  <Text style={{color: '#999', fontSize: 12,}}>北港青年 昨天 11:35</Text>
                </View>
              </View>
              <View style={{height: 12, backgroundColor:'#f3f3f3'}}></View>
              {/*top1*/}
              <View style={styles.pad}>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 12}}>
                  <View style={{width: 20, height: 20, borderRadius: 0, backgroundColor: '#f3f3f3', borderWidth: 0.5, borderColor: '#4ba8a1', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('@/assets/images/logo_ico.png')} style={{width: 14, height: 14}}/>
                  </View>
                  <View style={{marginLeft: 6, }}>
                    <G_Text tWeight="bold" tColor='#333333' tSize={14} tTitle="热点"/>
                  </View>
                </View>
                <View style={{flexDirection: 'row', paddingBottom: 12}}>
                  <View style={{width: '100%', flex: 1, marginRight: 6,}}>
                    <Image source={{uri: 'https://inews.gtimg.com/newsapp_ls/0/13071281147_485350/0'}} style={{ width: '100%', flex: 1, marginRight: 6 , height: this.state.imgObjHg, borderRadius: 10}} />
                  </View>
                  <View style={{flex: 2, marginLeft: 6}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 6}}>
                      <View style={{borderColor: '#085a54', borderWidth: 0.5, borderRadius: 4, paddingLeft: 2, paddingRight: 2}}>
                        <Text style={{fontSize: 8, color: '#085a54'}}>TOP1</Text>
                      </View>
                      <View style={{height: 0.5, width: 30, backgroundColor: '#085a54', marginLeft: 6}}></View>
                    </View>
                    <G_Text tWeight="bold" tColor='#333333' tSize={14} tTitle="中国军工正改进歼-20“心脏”，直到其可以匹敌F-22"></G_Text>
                    <Text style={{color: '#999', fontSize: 12, marginTop: 6}}>海外网 12:33:25</Text>
                  </View>
                </View>
                {/*2-3*/}
                <View style={{flexDirection: 'row', paddingTop: 12, borderColor: '#ccc', borderTopWidth: 1, }}>
                  <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 6}}>
                      <View style={{borderColor: '#4ba8a1', borderWidth: 0.5, borderRadius: 4, paddingLeft: 2, paddingRight: 2}}>
                        <Text style={{fontSize: 8, color: '#4ba8a1'}}>TOP2</Text>
                      </View>
                      <View style={{height: 0.5, width: 30, backgroundColor: '#4ba8a1', marginLeft: 6}}></View>
                    </View>
                    <G_Text tWeight="bold" tColor='#333333' tSize={14} tTitle="拜登上任首日，美国就申请重新加入世卫，俄媒：先开放德特里克堡"></G_Text>
                    <Text style={{color: '#999', marginTop: 6, fontSize: 12,}}>全球日报 昨天23:15</Text>
                  </View>
                  <View style={{width: 1, height: '100%', backgroundColor: '#ccc', marginLeft: 12, marginRight: 12}}>
                  </View>
                  <View  style={{flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 6}}>
                      <View style={{borderColor: '#6dd8d0', borderWidth: 0.5, borderRadius: 4, paddingLeft: 2, paddingRight: 2}}>
                        <Text style={{fontSize: 8, color: '#6dd8d0'}}>TOP3</Text>
                      </View>
                      <View style={{height: 0.5, width: 30, backgroundColor: '#6dd8d0', marginLeft: 6}}></View>
                    </View>
                    <G_Text tWeight="bold" tColor='#333333' tSize={14} tTitle="邱蔚：原65军军长，军衔却只授少将，政委、政治部主任都是中将"></G_Text>
                    <Text style={{color: '#999', marginTop: 6, fontSize: 12,}}>知心网 昨天08:35</Text>
                  </View>
                </View>
              </View>
              <View style={{height: 12, backgroundColor:'#f3f3f3'}}></View>
            </View>
          )}
          renderItem={({item}) => (
            <TouchableHighlight onPress={this.goTo}>
              <List data={item} imgObjHg={this.state.imgObjHg} key={item.title}/>
            </TouchableHighlight>
          )}
        />
      </View>
    )
  }
}