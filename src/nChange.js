// @ts-check

/**
 * 
 *
 * @param {number[]} coins 
 * @returns {number}
 */
const nChange = coins => {
    coins.sort((a, b) => a - b)
    let change = 0
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] > change + 1) return change + 1
        change += coins[i]
    }
    return change + 1
}

// in-source test suites
if (import.meta.vitest) {
    it('Test Case 1', () => expect(nChange([5, 7, 1, 1, 2, 3, 22])).toBe(20))

    it('Test Case 2', () => expect(nChange([1, 1, 1, 1, 1])).toBe(6))

    it('Test Case 3', () => expect(nChange([1, 5, 1, 1, 1, 10, 15, 20, 100])).toBe(55))
}