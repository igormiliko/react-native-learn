import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface IRowProps {
    children: Array<JSX.Element>
}

const Row: React.FC<IRowProps> = ({children}) => {
  return (
    <View style={styles.row}>
        {children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }
});
