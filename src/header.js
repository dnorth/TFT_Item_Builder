import React from 'react'
import { View, StyleSheet } from 'react-native'

import StyledText from './styled-text'

const Header = (props)  => (
    <View style={styles.headerContainer}>
        <StyledText style={styles.title}>TFT Item Builder</StyledText>
    </View>
)

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#042037',
        alignSelf: 'stretch',
        borderBottomColor: '#718EA4' 
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 24,
        padding: 16
    }
  });