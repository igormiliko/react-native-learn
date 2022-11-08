import { Platform, StyleSheet, StatusBar } from "react-native";

// Create a flex column layout
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  box: {
    height: 100,
    justifyContent: "center",
    alignSelf: "stretch",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray",
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
});
