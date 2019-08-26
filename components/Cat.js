import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {View, Text, Image, StyleSheet} from 'react-360';


const fetchData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      image: 'https://loremflickr.com/256/256/cat',
    })
  }, 2000);
});

class Cat extends Component {
  state = {
    data: null,
    loading: false,
  };

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    this.setState({ loading: true });
    fetchData().then((data) => {
      this.setState({ data, loading: false });
    })
  }

  render() {
    const {loading, data} = this.state;
    return (
      <View style={styles.container}>
        {loading ? <Text style={styles.loading}>Loading...</Text> : null}
        {data ? (
          <Image source={{ uri: data.image }} style={styles.img} />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
  },
  loading: {
    width: 200,
    height: 30,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
  },
  img: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
  }
});

Cat.propTypes = {};

export default Cat;
