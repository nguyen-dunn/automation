import { expect, test } from 'playwright/test'

const { describe } = test

describe('No details tests', () => {
  test('positive assertion', async ({}) => {
    expect(true).toBe(true)
  })
})
