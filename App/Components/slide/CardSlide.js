import React from "react";
import { View, Image, Text } from "react-native";

const cardSlide = ({ item }) => (
  <View key={item.price}>
    <Image source={{ uri: item.imgUrl }} style={{ width: 190, height: 220, borderRadius: 5 }} />
    <Text
      style={{
        fontSize: 20,
        color: "#434343"
      }}
    >
      ${item.price}
    </Text>
    <Text
      style={{
        fontSize: 20,
        color: "#434343"
      }}
    >
      {item.title}
    </Text>
  </View>
);

export { cardSlide };
