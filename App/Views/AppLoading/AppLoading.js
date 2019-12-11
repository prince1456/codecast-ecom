import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { View } from "react-native";
import * as firebase from "firebase";
import React, { useEffect, useState } from "react";
import Firebase from "../../Util/firebase";

const Loading = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [view, setView] = useState(null);
  useEffect(() => {
    if (!firebase.apps.length) {
      Firebase.initialize();
    }
    const findUser = async () => {
      try {
        firebase.auth().onAuthStateChanged(user => {
          setUser(user);
          const view = user ? "App" : "Auth";
          navigation.navigate(view);
        });
      } catch (e) {
        console.log(e);
      }
    };
    findUser();
  });
  const goToNextPage = () => {
    navigation.navigate(view);
  };
  const _cacheSplashResourcesAsync = async () => {
    const splash = require("../../../assets/splash.png");
    return Asset.fromModule(splash).downloadAsync();
  };

  return (
    <View>
      <AppLoading
        startAsync={_cacheSplashResourcesAsync}
        onFinish={() => goToNextPage}
        onError={console.warn}
      />
    </View>
  );
};
export default Loading;
