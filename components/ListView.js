import React, { Component, Fragment } from "react";

import { View, Text, StyleSheet } from "react-360";

class ListView extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    console.log("------------------------");
    console.log("testando");
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => this.setState({ list: response }));
  }

  render() {
    const { list } = this.state;

    return (
      <Fragment>
        {list.map(item => (
          <Fragment key={item.id}>
            <View style={styles.div}>
              <Text>{item.title}</Text>
              <View style={styles.separador}></View>
            </View>
          </Fragment>
        ))}
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  div: {
    margin: 10,
    width: 400,
    height: 80,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center"
  },
  separador: {
    width: 300,
    height: 10,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ListView;
