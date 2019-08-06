import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'
import items from '../assets/data/items'

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
    <TouchableHighlight style={styles.baseItemContainer} onPress={onBaseItemPress}>
        <Image
            style={styles.icon}
            source={props.icon}
        />
    </TouchableHighlight>
)

const onBaseItemPress = () => {
    console.log('pressed on something!')
}

const styles = StyleSheet.create({
    baseItemsContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
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