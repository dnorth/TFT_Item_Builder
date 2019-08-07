import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import SectionTitle from './section-title'
import items from '../assets/data/items'
import StyledText from './styled-text'
import BaseItem from './base-item'
import AppColors from './app-colors'

export default class SelectedItems extends Component {
    render() {
        const { selectedItems, onBaseItemClick } = this.props

        return (
            <View>
                <SectionTitle title="Selected Items" />
                <View style={styles.baseItemsContainer}>
                    {
                        selectedItems
                        .filter(item => item.count > 0)
                        .map(item => (
                            <View style={styles.selectedItemContainer}>
                                <BaseItem key={item.name} baseItem={item} onBaseItemClick={onBaseItemClick} />
                                <View style={styles.selectedItemCounter}>
                                    <StyledText>{item.count}</StyledText>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    baseItemsContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    baseItemContainer: {
        margin: 16
    },
    selectedItemContainer: {
        position: 'relative'
    },
    selectedItemCounter: {
        position: 'absolute',
        right: 18,
        bottom: 18,
        backgroundColor: AppColors.color_5,
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: AppColors.color_accent,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });