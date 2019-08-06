import React, { Component } from 'react';
import { registerRootComponent, AppLoading } from 'expo';
import * as Font from 'expo-font'
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import BaseItems from './base-items'
import Header from './header'

class App extends Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'montserrat': require('../assets/fonts/Montserrat-Regular.ttf')
    })

    this.setState({
      fontLoaded: true
    })
  }

  render() {
    if(!this.state.fontLoaded) {
      return <AppLoading />
    }

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Header />
          <View style={styles.itemsContainer}>
            <BaseItems />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itemsContainer: {
    padding: 16,
    backgroundColor: '#123652'
  }
});


export default registerRootComponent(App);