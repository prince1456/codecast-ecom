import React, { useEffect, useRef } from "react";
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Input, Icon, Item, Text, Container } from "native-base";
import FirebaseApp from "../../Util/Auth";
import Carousel from "react-native-snap-carousel";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { categorySlide, cardSlide } from "../../Components";

const categories = [
  {
    title: ``,
    text: false,
    imgUrl: require("../../../assets/Group-3.png")
  },
  {
    title: ``,
    text: false,
    imgUrl: require("../../../assets/Group-2.png")
  },
  {
    title: `Women`,
    text: true,
    imgUrl: require("../../../assets/Group-1.png")
  }
];

const data = Array(10)
  .fill(0)
  .map((item, i) => ({
    title: `Women T-Shirt ${i}`,
    price: 10,
    imgUrl:
      "https://cdn5.vectorstock.com/i/1000x1000/86/34/abstract-dark-mobile-phone-backgrounds-with-flower-vector-9228634.jpg"
  }));

var { height, width } = Dimensions.get("window");
const Home = ({ navigation }) => {
  const slider = useRef(null);
  useEffect(() => {
    // FirebaseApp.logout()
    return;
  }, []);
  const search = ({ nativeEvent }) => {
    console.log(nativeEvent.text);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ alignItems: "flex-end", margin: 16 }}
          onPress={navigation.openDrawer}
        >
          <Ionicons
            style={styles.icon}
            name="ios-menu"
            size={32}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "flex-end", margin: 16 }}
          onPress={navigation.openDrawer}
        >
          <AntDesign
            style={styles.icon}
            name="filter"
            size={32}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 25, paddingLeft: 30, paddingRight: 30 }}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search your Product" onEndEditing={search} />
        </Item>
      </View>
      <View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Categories</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        <Carousel
          ref={slider}
          data={categories}
          renderItem={categorySlide}
          sliderWidth={width}
          itemWidth={150}
          firstItem={1}
        />
      </View>
      <View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Featured</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        <Carousel
          ref={slider}
          data={data}
          renderItem={cardSlide}
          sliderWidth={width}
          itemWidth={190}
          firstItem={1}
        />
      </View>
      <View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Best Sell</Text>
          <Text style={styles.link}>See all</Text>
        </View>
        <Carousel
          ref={slider}
          data={data}
          renderItem={cardSlide}
          sliderWidth={width}
          itemWidth={190}
          firstItem={1}
        />
      </View>
    </ScrollView>
  );
};

Home.navigationOptions = {
  headerShown: false
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25
  },
  header: {
    paddingRight: 20,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  icon: {
    width: 32,
    height: 32
  },
  title: {
    fontSize: 20,
    color: "#434343"
  },
  text: {
    fontSize: 14,
    color: "#656565"
  },
  slider: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textWrapper: {
    padding: 20,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export default Home;
