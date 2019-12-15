import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import FirebaseApp from '../../Util/Auth'
const FeatureList = ({ navigation }) => {
    const [firstName, setFirstName ] = useState(' ')
    useEffect(() => {
        (async function(){
           const docs =  await FirebaseApp.getFirstName();
           console.log(docs)
           setFirstName(docs.name)
        })()
        return;
    }, [])
  const title = navigation.getParam("title");
  return (
    <View style={styles.container}>
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
      <ScrollView>
        <Text>{firstName}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 25,
    paddingLeft: 25
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40
  },
  icon: {}
});
export default FeatureList;
