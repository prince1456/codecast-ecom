import React, { useState, useEffect } from "react";
import { ScrollView, Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import FirebaseApp from '../../Util/Auth'
const CustomDrawer = props => {
    const [name, setName] = useState(' ')
    useEffect(() => {
        (async function() {
            const userInfo = await FirebaseApp.getFirstName();
            setName(userInfo.name)
        })()
        return
    }, [name])
   return  (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
    >
        <View style={styles.header}>
            <View style={styles.avatar}></View>
            <Text>welcome back {name}</Text>
        </View>
      <DrawerItems {...props} />
    </SafeAreaView>
    <Button
      style={styles.logoutButton}
      title="Logout"
      onPress={() => FirebaseApp.logout()}
    />
  </ScrollView>
)};

const styles = StyleSheet.create({
  container: { flex: 1 },
  logoutButton: { color: "white", alignSelf: 'flex-end'},
  header: { height: 150, alignItems: 'center', justifyContent: 'center'},
  avatar: { height: 80, width: 80, borderRadius: 40, backgroundColor: 'black', borderColor: 'yellow', borderWidth: 5}
})
export { CustomDrawer };
