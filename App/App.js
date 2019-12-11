import React from "react";
import Navigation from "./routers/navigation";
import { Container } from "native-base";
import { SafeAreaView } from "react-native";

function App() {
  return (
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
  );
}
export default App;
