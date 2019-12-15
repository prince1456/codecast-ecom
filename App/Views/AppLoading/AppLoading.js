import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as firebase from "firebase";
import React, { useEffect } from "react";
import Firebase from "../../Util/firebase";

const Loading = ({ navigation }) => {
  useEffect(() => {
    if (!firebase.apps.length) {
      Firebase.initialize();
    }
   (async function(){
      try {
        firebase.auth().onAuthStateChanged(user => {
          const view = user ? "App" : "Auth";
          navigation.navigate(view);
        });
      } catch (e) {
        console.log(e);
      }
    })();
    return ;
  }, []);
  const goToNextPage = () => {
    console.log("loaded")
  };
  const _cacheSplashResourcesAsync = async () => {
    const splash = require("../../../assets/splash.png");
    return Asset.fromModule(splash).downloadAsync();
  };

  return (
      <AppLoading
        startAsync={_cacheSplashResourcesAsync}
        onFinish={() => goToNextPage}
        onError={console.warn}
      />
  );
};
export default Loading;
