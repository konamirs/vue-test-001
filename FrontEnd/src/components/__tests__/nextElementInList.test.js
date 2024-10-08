import { describe, it, expect } from 'vitest'
import nextElementInList from '../../Utils/nextElementInList'

describe('nextElementInList', () => {
  it('locates element in list and return next element in list'),
    () => {
      const list = ['A', 'B', 'C', 'D', 'E']
      const value = 'E'
      const result = nextElementInList(list, value)
      expect(result).toBe('D')
    }

  describe('when element is at the end off the list', () => {
    it('locates next element at start of the list'),
      () => {
        const list = ['A', 'B', 'C', 'D', 'E']
        const value = 'E'
        const result = nextElementInList(list, value)
        expect(result).toBe('A')
      }
  })
})
