import assert from 'assert'
import { splitEvery } from './splitEvery.js'

describe('splitEvery', function () {
  it('should return [[1, 2], [3, 4], [5, 6], [7]] when [1, 2, 3, 4, 5, 6, 7], 2 is passed as arg', function () {
    assert.deepEqual(splitEvery([1, 2, 3, 4, 5, 6, 7], 2), [[1, 2], [3, 4], [5, 6], [7]])
  })
  it('should return [[1, 2, 3], [4, 5, 6], [7]] when [1, 2, 3, 4, 5, 6, 7], 3 is passed as arg', function () {
    assert.deepEqual(splitEvery([1, 2, 3, 4, 5, 6, 7], 3), [[1, 2, 3], [4, 5, 6], [7]])
  })
  it('should return [[1, 2, 3, 4, 5, 6, 7]] when [1, 2, 3, 4, 5, 6, 7], 0 is passed as arg', function () {
    assert.deepEqual(splitEvery([1, 2, 3, 4, 5, 6, 7], 0), [[1, 2, 3, 4, 5, 6, 7]])
  })
  it('should return [] when [], 3 is passed as arg', function () {
    assert.deepEqual(splitEvery([], 3), [])
  })
  it('should return [[1]] when [1], 3 is passed as arg', function () {
    assert.deepEqual(splitEvery([1], 3), [[1]])
  })
  it('should return invalid when [1,2,3], -2 is passed as arg', function () {
    assert.equal(splitEvery([1, 2, 3], -2), 'invalid')
  })
})
