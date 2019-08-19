import { getPossibleCombinedItems } from '../src/combined-items.helper'

describe('getPossibleCombinedItems (sorted)', () => {
    describe('when user selects only one base item', () => {
        const baseItems = [
            {
                id: 1,
                count: 1
            }
        ]

        it('should not return any combined items', () => {
            expect(getPossibleCombinedItems(baseItems)).toEqual([])
        })
    })

    describe('when user selects two of the same base item', () => {
        const baseItems = [
            {
                id: 1,
                count: 2
            }
        ]

        it('should return one combined item', () => {
            const combinedItems = getPossibleCombinedItems(baseItems)
            expect(combinedItems[0].recipe).toEqual([1,1])
        })
    })

    describe('when user selects two of the same base item and one of another', () => {
        const baseItems = [
            {
                id: 1,
                count: 2
            },
            {
                id: 2,
                count: 1
            }
        ]

        const combinedItems = getPossibleCombinedItems(baseItems)

        it('should return [1,1] [1,2]', () => {
            expect(combinedItems.length).toEqual(2)

            expect(combinedItems[0].recipe).toEqual([1,1])
            expect(combinedItems[1].recipe).toEqual([1,2])
        })
    })

    describe('when user selects two of the same base item and two of another', () => {
        const baseItems = [
            {
                id: 1,
                count: 2
            },
            {
                id: 2,
                count: 2
            }
        ]

        const combinedItems = getPossibleCombinedItems(baseItems)

        it('should return [1,1] [1,2] [1,2] [2,2]', () => {
            expect(combinedItems.length).toEqual(4)
            expect(combinedItems[0].recipe).toEqual([1,1])
            expect(combinedItems[1].recipe).toEqual([1,2])
            expect(combinedItems[2].recipe).toEqual([1,2])
            expect(combinedItems[3].recipe).toEqual([2,2])
        })
    })
})
