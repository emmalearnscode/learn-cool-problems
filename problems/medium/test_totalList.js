import assert from 'assert'
import { totalList } from './totalList.js'

describe('totalList', function () {
  it('should return 0 if x = []', function () {
    assert.equal(totalList([]), 0)
  })
  it('should return 1 if x = [1]', function () {
    assert.equal(totalList([1]), 1)
  })
  it('should return 21 if x = [1,2,3,4,5,6]', function () {
    assert.equal(totalList([1, 2, 3, 4, 5, 6]), 21)
  })
  it('should return -6 if x = [1,3,-10]', function () {
    assert.equal(totalList([1, 3, -10]), -6)
  })
})
