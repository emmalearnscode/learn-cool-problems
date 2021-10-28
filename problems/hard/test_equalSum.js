import assert from 'assert'
import { equalSum } from './equalSum.js'

describe('equalSum', function () {
  it('should return [[1, 5], [2, 4]] when [1,2,3,4,5,6], 6 is passed as arg', function () {
    assert.deepEqual(equalSum([1, 2, 3, 4, 5, 6], 6), [
      [1, 5],
      [2, 4],
    ])
  })
  it('should return [] when [], 3 is passed as arg', function () {
    assert.deepEqual(equalSum([], 3), [])
  })
  it('should return [] when [1,5], 4 is passed as arg', function () {
    assert.deepEqual(equalSum([1, 5], 4), [])
  })
  it('should return [] when [3], 3 is passed as arg', function () {
    assert.deepEqual(equalSum([3], 3), [])
  })
  it('should return [-2, 3] when [1, -2, 3, 4, 5, 6], 1 is passed as arg', function () {
    assert.deepEqual(equalSum([1, -2, 3, 4, 5, 6], 1), [[-2, 3]])
  })
})
