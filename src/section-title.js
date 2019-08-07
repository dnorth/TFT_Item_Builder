import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './styled-text'
import AppColors from './app-colors'

export default class SectionTitle extends Component {
    render() {
        return (
            <View style={styles.sectionTitleContainer}>
                <StyledText style={styles.sectionTitle}>{this.props.title}</StyledText>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sectionTitleContainer: {
        borderBottomColor: AppColors.color_1,
        borderBottomWidth: 1
    },
    sectionTitle: {
        paddingVertical: 4,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        borderBottomColor: AppColors.color_accent,
        borderBottomWidth: 4,
        fontSize: 16
    }
});