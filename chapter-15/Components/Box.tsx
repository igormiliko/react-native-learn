import * as React from 'react';
import { Text, View } from 'react-native';
import style from '../style';

interface BoxProps {
    children?: JSX.Element | string
}

const Box: React.FC<BoxProps> = ({children}) => {
  return (
    <View style={style.box}>
      <Text style={style.boxText}>{children}</Text>
    </View>
  );
};

export default Box;