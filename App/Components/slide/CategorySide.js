import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import { white } from "ansi-colors";

const categorySlide = ({ item, index }) => {
  return (
    <ImageBackground
      style={styles.image}
      source={item.imgUrl}
      imageStyle={{ opacity: 0.5 }}
      style={{ width: 250, height: 180, borderRadius: 5  }}
    >
      <View style={styles.textWrapper}>
        {item.text && <Text style={styles.text}>{item.title}</Text>}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600"
  }
});
export { categorySlide };
