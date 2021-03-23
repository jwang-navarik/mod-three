const modThree = require('../src/mod-three')

describe('#### mod-three tests ####', () => {
  it('Test with valid number', () => {
    expect(modThree('1101')).toBe(1)
    expect(modThree('1110')).toBe(2)
    expect(modThree('1111')).toBe(0)
  })

  it('Test with invalid number', () => {
    expect(() => modThree('')).toThrow('Empty string')
    expect(() => modThree(1)).toThrow('Invalid input')
    expect(() => modThree(null)).toThrow('Invalid input')
    expect(() => modThree([])).toThrow('Invalid input')
  })
})
