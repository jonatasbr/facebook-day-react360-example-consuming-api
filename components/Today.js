import React from 'react';

import Clock from './Clock';
import Cat from './Cat';
import {View, StyleSheet, VrButton} from 'react-360';

class Today extends React.Component {
  state = {
    isOpen: false,
  };

  toggleOpen() {
    const {isOpen} = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const {isOpen} = this.state;
    return (
      <View style={styles.container}>
        <VrButton onClick={() => this.toggleOpen()} style={styles.button}>
          <Clock />
        </VrButton>
        {isOpen ? (
          <Cat />
        ) : null}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 300,
  },
  button: {
    width: 200,
    height: 100,
    backgroundColor: 'green',
  }
});

export default Today;
