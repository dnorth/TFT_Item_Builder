import React, { Component } from 'react'
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import BaseItem from './base-item'
import SectionTitle from './section-title'

export default class BaseItems extends Component {
    render() {
        const { baseItems } = this.props

        return (
            <View>
                <SectionTitle title="Base Items" />
                <View style={styles.baseItemsContainer}>
                    {
                        baseItems.map(baseItem => <BaseItem key={baseItem.name} baseItem={baseItem} onBaseItemClick={this.props.onBaseItemClick} />)
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
  });