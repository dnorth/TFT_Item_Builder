import React, { Component } from 'react'
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import BaseItem from './base-item'
import SectionTitle from './section-title'
import StyledText from './styled-text'
import AppColors from './app-colors'

export default class BaseItems extends Component {
    render() {
        const { baseItems } = this.props

        return (
            <View>
                <SectionTitle title="Base Items" />
                <View style={styles.baseItemsContainer}>
                    {
                        baseItems.map(baseItem =>
                            <View key={baseItem.name} style={styles.inventoryContainer}>
                                <BaseItem baseItem={baseItem} onBaseItemClick={this.props.onBaseItemClick} />
                                {
                                    baseItem.count > 0 && (
                                        <View style={styles.inventoryCounter}>
                                            <StyledText>{baseItem.count}</StyledText>
                                        </View>
                                    )
                                }
                            </View>
                        )
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
    inventoryContainer: {
        position: 'relative'
    },
    inventoryCounter: {
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