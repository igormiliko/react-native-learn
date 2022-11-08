import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Components/Box';
import style from './style-4';

export default function App() {
  return (
    <View style={style.container}>
      {
        Array.from(Array(3).keys()).map((n) => <Box children={<># {n+1}</>}/>)
      }
    </View>
  );
}
