import React from 'react';

import {View, Text, StyleSheet} from 'react-360';


class Clock extends React.Component {
  timer = null;
  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.startClock();
  }
  componentWillUnmount() {
    this.stopClock();
  }

  startClock() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 500);
  }

  stopClock() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <View style={styles.clock}>
        <Text>{this.state.time.toLocaleTimeString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  clock: {
    width: 200,
    height: 100,
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Clock;
