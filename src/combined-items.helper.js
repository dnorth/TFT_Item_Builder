import items from '../assets/data/items'
import { isEmpty, isEqual, cloneDeep } from 'lodash'

export const getPossibleCombinedItems = (baseItems) => {
    const combinedItems = items.combinedItems

    const baseItemsInventory = baseItems.map(b => ({ id: b.id, count: b.count })).filter(b => b.count > 0)
    
    const allPossibleRecipes = getAllPossibleRecipes(baseItemsInventory, []).sort()

    return allPossibleRecipes.map(recipeItem => combinedItems.find(c => isEqual(c.recipe, recipeItem)))
}

const getAllPossibleRecipes = (remainingItemsInventory, completedItemArray) => {
    if(isEmpty(remainingItemsInventory)) {
        return completedItemArray
    }

    const remainingItemsInventoryClone = cloneDeep(remainingItemsInventory)
    const newCompletedItemArray = getRecipeItems(remainingItemsInventoryClone, completedItemArray)
    
    const [head, ...tail] = remainingItemsInventory
    return getAllPossibleRecipes(tail, newCompletedItemArray)
}

const getRecipeItems = (remainingListOfItems, completedItemArray) => {
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
    
    return getRecipeItems(evenNewerRemainingListOfItems, completedItemArray)
}