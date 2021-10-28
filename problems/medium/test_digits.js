import assert from 'assert'
import { digits } from './digits.js'

describe('digits', function () {
  it('should return [2, 4] when n = 24 is passed as arg', function () {
    assert.deepEqual(digits(24), [2, 4])
  })
  it('should return [] when n = 0 is passed as arg', function () {
    assert.deepEqual(digits(0), [])
  })
  it('should return [1] when n = 1 is passed as arg', function () {
    assert.deepEqual(digits(1), [1])
  })
  it('should return [1, 2, 0, 4, 5] when n = 12045 is passed as arg', function () {
    assert.deepEqual(digits(12045), [1, 2, 0, 4, 5])
  })
  it('should return [4, 5] when n = -45 is passed as arg', function () {
    assert.deepEqual(digits(-45), [4, 5])
  })
})
