import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";

import Clock from "./components/Clock";
import Today from "./components/Today";
import Cat from "./components/Cat";
import ListView from "./components/ListView";

export default class buildday_bsb extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <ListView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  }
});

AppRegistry.registerComponent("buildday_bsb", () => buildday_bsb);
AppRegistry.registerComponent("Clock", () => Clock);
AppRegistry.registerComponent("Today", () => Today);
AppRegistry.registerComponent("Cat", () => Cat);
AppRegistry.registerComponent("ListView", () => ListView);
