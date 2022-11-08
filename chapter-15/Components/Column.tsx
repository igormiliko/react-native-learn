import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface IColumnProps {
    children: JSX.Element[]
}

const Column: React.FC<IColumnProps> = ({children}) => {
  return (
    <View style={styles.column}>
        {children}
    </View>
  );
};

export default Column;

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  }
});
