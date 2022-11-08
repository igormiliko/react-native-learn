import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationParams } from 'react-navigation';
import style from './style';

interface ISettingsProps {
    navigation: NavigationParams
}

const Settings: React.FC<ISettingsProps> = ({navigation}) => {
  return (
    <View style={style.container}>
        <Text>Settings Screen</Text>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Settings;
