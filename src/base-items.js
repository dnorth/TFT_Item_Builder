import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import items from '../tft-assets/data/items'

export default class BaseItems extends Component {
    constructor(props) {
        super(props)

        this.state = {
            baseItems: items.baseItems
        }
    }

    render() {
        const { baseItems } = this.state

        return (
            <View style={styles.baseItemsContainer}>
                {
                    baseItems.map(baseItem => <BaseItem key={baseItem.name} name={baseItem.name} icon={baseItem.icon} />)
                }
            </View>
        )
    }
}

const BaseItem = (props) => (
    <View style={styles.baseItemContainer}>
        <Image
            style={styles.icon}
            source={props.icon}
        />
    </View>
)

const styles = StyleSheet.create({
    baseItemsContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    baseItemContainer: {
        margin: 8
    },
    icon: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: '#d47559',
        backgroundColor: 'black'
    },
  });