// @ts-check

/**
 * 
 *
 * @param {number[]} input 
 * @return {number[]}
 */
const sortedSquaredArray = (input) => {
    return input.slice(0).sort((a, b) => a - b).map(i => Math.pow(i, 2)).sort((a, b) => a - b)
}

// in-source test suites
if (import.meta.vitest) {
    it('Test Case 1', () => expect(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 4, 9, 25, 36, 64, 81]))

    it('Test Case 2', () => expect(sortedSquaredArray([-2, -1])).toEqual([1, 4]))

    it('Test Case 3', () => expect(sortedSquaredArray([-10, -5, 0, 5, 10])).toEqual([0, 25, 25, 100, 100]))
}