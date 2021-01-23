import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, FlatList, ScrollView, Image, Easing } from "react-native";
import SplashScreen from "react-native-splash-screen";

class List extends Component {
  render() {
    // 模拟列表数据
    const mockData = [
      '富强',
      '民主',
      '文明',
      '和谐',
      '自由',
      '平等',
      '公正',
      '法治',
      '爱国',
      '敬业',
      '诚信',
      '友善'
    ]

    return (
      <FlatList
        onScroll={this.props.onScroll}
        data={mockData}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text>{item}</Text>
          </View>
        )}
      />
    )
  }
}

export default class AnimatedScrollDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerTop: new Animated.Value(0),
      animatedValue: new Animated.Value(0),
    }
    this.animatedEvent = Animated.event([
      {
        nativeEvent: {
          contentOffset: { y: this.state.headerTop}
        }
      }
    ])
    this.rotateAnimated = Animated.timing(
      this.state.animatedValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.in,
      }
    );
  }

  componentDidMount() {
    SplashScreen.hide();
    // P.S. 270,217,280区间的映射是告诉interpolate，所有大于270的值都映射成-50
    // 这样就不会导致Header在上滑的过程中一直向上滑动了
  }

  render() {
    const top = this.state.headerTop.interpolate({
      inputRange: [0, 110, 120, 130],
      outputRange: [0, -60, -60, -60]
    })
    const opacity = this.state.animatedValue.interpolate({
      inputRange: [0, 110, 120, 130],
      outputRange: [1, 0, 0, 0]
    });
    return (
      <View style={styles.container}>
        <Animated.View style={{  top: top }}>
          <View style={styles.header}>
            <Text style={styles.text}>linshuirong.cn</Text>
          </View>
        </Animated.View>
        {/* 在oHeader组件上移的同时，列表容器也需要同时向上移动，需要注意。 */}
        {/*<Animated.View style={{ top: this.top }}>*/}
        {/*  <List onScroll={this.animatedEvent} />*/}
        {/*</Animated.View>*/}
        <Animated.View style={{ top: top }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={this.animatedEvent}
          >
            <View style={{flexDirection: "row", paddingBottom: 12, paddingTop: 12, borderBottomWidth: 1, borderBottomColor: "#ccc", top: 0}}>
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
                <Text style={{fontSize: 14, fontWeight: "bold"}}>【女神驾道34566】美女主持人携手丰田荣放自驾甘南冰雪...</Text>
                <Text>豪横的程度堪比盛筵，这也是后来我们听一位神秘的同行小伙伴提及的没关系！所以...</Text>
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    height: 80,
    backgroundColor: 'pink',
    marginBottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  header: {
    height: 50,
    backgroundColor: '#3F51B5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
})