import { isValidDate, toDomString } from './dateService'

describe('#toDomString', () => {
  it('should return the date as a string separated by -', () => {
    const testDate = new Date('2020-11-04')
    const transformedDate = toDomString(testDate)
    expect(transformedDate).toBe('2020-11-04')
  })
  it('should add a leading 0 to the month and day', () => {
    const testDate = new Date('2020-09-04')
    const transformedDate = toDomString(testDate)
    expect(transformedDate).toBe('2020-09-04')
  })
  it('should return the current date as a string separated by -', () => {
    const testDate = new Date()
    const transformedDate = toDomString(testDate)
    expect(transformedDate).toBe(new Date().toISOString().slice(0, 10))
  })
  it('should return undefined if passed data cannot be converted to a date', () => {
    const invalidDate = { year: '2020', month: '11', day: '04' }
    const transformedDate = toDomString(invalidDate)
    expect(transformedDate).toBe(undefined)
  })
})

describe('#isValidDate', () => {
  it('should return true for valid date', () => {
    const validDate = new Date()
    const isValid = isValidDate(validDate)
    expect(isValid).toBeTruthy()
  })

  it('should return false for invalid date', () => {
    const invalidDate = new Date('Foo')
    const isValid = isValidDate(invalidDate)
    expect(isValid).toBeFalsy()
  })
})
