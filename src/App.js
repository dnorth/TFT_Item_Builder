import React, { Component } from 'react';
import { registerRootComponent } from 'expo';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import BaseItems from './base-items'

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text style={styles.title}>TFT Item Builder</Text>
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
    alignItems: 'center'
  },
  title: {
    height: 60,
    padding: 16
  }
});


export default registerRootComponent(App);