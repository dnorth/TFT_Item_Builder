import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { isEmpty, isEqual, cloneDeep } from 'lodash'

import SectionTitle from './section-title'
import items from '../assets/data/items'
import StyledText from './styled-text'
import BaseItem from './base-item'
import AppColors from './app-colors'

export default class CombinedItems extends Component {
    render() {
        const { baseItems } = this.props

        const possibleCombinedItems = this.getPossibleCombinedItems(baseItems)
        console.log('possible combined items: ', possibleCombinedItems)
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

    getPossibleCombinedItems = (baseItems) => {
        const combinedItems = items.combinedItems

        const baseItemsInventory = baseItems.map(b => ({ id: b.id, count: b.count })).filter(b => b.count > 0)
        
        const allPossibleRecipes = this.getAllPossibleRecipes(baseItemsInventory, []).sort()
        console.log('all possible recipes: ', allPossibleRecipes)
        return allPossibleRecipes.map(recipeItem => combinedItems.find(c => isEqual(c.recipe, recipeItem)))
    }

    getAllPossibleRecipes = (remainingItemsInventory, completedItemArray) => {
        if(isEmpty(remainingItemsInventory)) {
            return completedItemArray
        }

        const remainingItemsInventoryClone = cloneDeep(remainingItemsInventory)
        const newCompletedItemArray = this.getRecipeItems(remainingItemsInventoryClone, completedItemArray)
        
        const [head, ...tail] = remainingItemsInventory
        return this.getAllPossibleRecipes(tail, newCompletedItemArray)
    }

    getRecipeItems = (remainingListOfItems, completedItemArray) => {
        if (isEmpty(remainingListOfItems) || remainingListOfItems.length === 1 && remainingListOfItems[0].count === 1) {
            return completedItemArray
        }

        const [head, ...tail] = remainingListOfItems
        head.count = head.count - 1
        const newRemainingListOfItems = remainingListOfItems.filter(i => i.count > 0)

        newRemainingListOfItems.forEach(item => {
            completedItemArray.push([head.id, item.id])
            item.count = item.count - 1
        })

        const evenNewerRemainingListOfItems = newRemainingListOfItems.filter(i => i.count > 0)
        
        return this.getRecipeItems(evenNewerRemainingListOfItems, completedItemArray)
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