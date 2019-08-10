import React, { Component } from 'react';
import { registerRootComponent, AppLoading } from 'expo';
import * as Font from 'expo-font'
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import BaseItems from './base-items'
import CombinedItems from './combined-items'
import Header from './header'
import items from '../assets/data/items'
import AppColors from './app-colors'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fontLoaded: false,
      baseItems: items.baseItems.map(item => ({...item, count: 0 })),
    }
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
    const { fontLoaded, selectedItems, baseItems } = this.state

    if(!fontLoaded) {
      return <AppLoading />
    }

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Header />
          <View style={styles.itemsContainer}>
            <BaseItems baseItems={baseItems} onBaseItemClick={this.addToInventory} />
            <CombinedItems baseItems={baseItems} />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  addToInventory = (selectedItemName) => {
    this.setState(prevState => ({
        baseItems: prevState.baseItems.map(item => item.name === selectedItemName ? {...item, count: item.count + 1} : item)
      })
    )
  }

  removeFromInventory = (selectedItemName) => {
      this.setState(prevState => ({
        baseItems: prevState.baseItems.map(item => item.name === selectedItemName ? {...item, count: item.count - 1} : item)
      })
    )  
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: AppColors.color_4,
    paddingTop: Platform.OS === 'android' ? 50 : 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itemsContainer: {
    flex: 3,
    padding: 16
  }
});


export default registerRootComponent(App);