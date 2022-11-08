import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationParams } from "react-navigation";
import style from "./style";

interface IHomeProps {
    navigation: NavigationParams
}

const Home: React.FC<IHomeProps> = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text>Home screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default Home;
