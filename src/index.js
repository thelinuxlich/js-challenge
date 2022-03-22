// @ts-check



// in-source test suites
if (import.meta.vitest) {
    it('dog is alive', () => {
        expect(dog.alive).toBe(false)
    })
}