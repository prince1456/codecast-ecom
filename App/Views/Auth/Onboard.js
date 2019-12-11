import { Button } from "native-base";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Onboard = ({navigation}) => {
  const goTo = (path) => {
    navigation.navigate(path)
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to The ecomm</Text>
        <Text style={styles.description}>Experience the difference</Text>
      </View>
      <Image source={require("../../../assets/onboard.png")} />
      <View style={{width: '50%'}}>
        <Button onPress={() => goTo('Login')} style={styles.loginBtn} block small primary>
          <Text  style={{color: 'white'}}>Log in</Text>
        </Button>
        <Button onPress={() => goTo('SignUp')}block transparent light>
          <Text>Signup</Text>
        </Button>
      </View>
    </View>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginBtn: {
    margin: 10,
    color: 'white'
  },
  description: {
    fontSize: 14,
    textAlign: 'center'
  },
  title: {
    fontSize: 30
  }
});
