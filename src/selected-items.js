import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import SectionTitle from './section-title'
import items from '../assets/data/items'
import StyledText from './styled-text'
import BaseItem from './base-item'

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
                            <BaseItem key={item.name} baseItem={item} onBaseItemClick={onBaseItemClick} />
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
    icon: {
        height: 40,
        width: 40,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: '#d47559',
    },
  });