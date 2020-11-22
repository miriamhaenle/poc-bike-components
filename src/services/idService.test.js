import { createID } from './idService'

describe('#createID', () => {
  it('should return a number', () => {
    const result1 = createID()
    expect(typeof result1).toBe('number')
  })

  it('should return a unique number', () => {
    const result1 = createID()
    const result2 = createID()
    expect(typeof result1).toBe('number')
    expect(typeof result2).toBe('number')
    expect(result1).not.toBe(result2)
  })
})
