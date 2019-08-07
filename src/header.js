import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppColors from './app-colors'

import StyledText from './styled-text'

const Header = (props)  => (
    <View style={styles.headerContainer}>
        <StyledText style={styles.title}>TFT Item Builder</StyledText>
    </View>
)

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: AppColors.color_5,
        alignSelf: 'stretch',
        borderBottomColor: AppColors.color_1,
        borderBottomWidth: 2
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 24,
        padding: 16
    }
  });