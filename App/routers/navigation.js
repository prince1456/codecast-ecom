import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { Login, SignUp, Home, Loading, Onboard, FeatureList} from "../Views";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { CustomDrawer } from '../Components'
const App = createDrawerNavigator({ Home: Home, FeatureList: FeatureList },{ 
    initialRouteName: 'FeatureList',
    contentComponent: CustomDrawer, 
    drawerPosition: 'left',
    drawerType: "slide",
    contentOptions: {
        activeTintColor: '#e91e63',
    }
});
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
