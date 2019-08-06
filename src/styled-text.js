import React from 'react'
import { Text, StyleSheet } from 'react-native'

const StyledText = (props) => (
    <Text style={[styles.appText, props.style]}>
        {props.children}
    </Text>
)

export default StyledText

const styles = StyleSheet.create({
    appText: {
        fontFamily: 'montserrat',
        color: 'white'
    }
})