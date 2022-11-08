import { Platform, StyleSheet, StatusBar } from "react-native";

// Create a flex row layout
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
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
    flex: 1,
    margin: 5,
    width: 100,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray",
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
});
