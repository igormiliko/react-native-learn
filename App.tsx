import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./Home"
import Settings from "./Settings"
import style from './style';
export default createAppContainer(
  createStackNavigator({Home, Settings}, {initialRouteName: "Home"})
)