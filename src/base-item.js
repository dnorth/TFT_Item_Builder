import React, { Component } from 'react'
import { Image, StyleSheet, TouchableHighlight } from 'react-native'
import items from '../assets/data/items'
import AppColors from './app-colors'

export default class BaseItem extends Component {
    render() {
        const { baseItem } = this.props

        return (
            <TouchableHighlight style={styles.baseItemContainer} onPress={() => this.props.onBaseItemClick(baseItem.name)}>
                <Image
                    style={styles.icon}
                    source={baseItem.icon}
                />
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    baseItemContainer: {
        margin: 16
    },
    icon: {
        height: 60,
        width: 60,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: AppColors.color_accent,
    },
  });