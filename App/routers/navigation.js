import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { Login, SignUp, Home, Loading, Onboard } from "../Views";
import { createStackNavigator } from "react-navigation-stack";
const App = createStackNavigator({ Home: Home });

const Auth = createStackNavigator(
  {
    Onboard: {
      screen: Onboard,
      navigationOptions: {
        headerShown: false
      }
    },
    SignUp: SignUp,
    Login: Login
  },
  {
    initialRouteName: "Onboard",
  }
);

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      AppLoading: Loading,
      Auth: Auth,
      App: App
    },
    { initialRouteName: "AppLoading" }
  )
);

export default Navigation;
