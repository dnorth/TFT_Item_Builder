import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import SectionTitle from './section-title'
import StyledText from './styled-text'
import BaseItem from './base-item'
import AppColors from './app-colors'
import { getPossibleCombinedItems } from './combined-items.helper'

export default class CombinedItems extends Component {
    render() {
        const { baseItems } = this.props

        const possibleCombinedItems = getPossibleCombinedItems(baseItems)

        return (
            <View>
                <SectionTitle title="Combined Items" />
                <View style={styles.combinedItemsContainer}>
                {
                    possibleCombinedItems.map((item, i) => (
                        <BaseItem key={item.name + i} baseItem={item} />
                    ))
                }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    combinedItemsContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
  });