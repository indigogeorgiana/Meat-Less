const math = require('../functions/math')

test('lambgas returns co2 figure per entry', () => {
  const data = {
    meat_id: 3,
    amount: 1
  }
  const expected = (0.0392, 7, 0.091)
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('beefgas returns co2 figure per entry', () => {
  const data = {
    meat_id: 1,
    amount: 1
  }
  const expected = (0.027, 15.4, 0.063)
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('porkgas returns co2 figure per entry', () => {
  const data = {
    meat_id: 2,
    amount: 1
  }
  const expected = (0.0121, 6, 0.031)
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('poultrygas returns co2 figure per entry', () => {
  const data = {
    meat_id: 5,
    amount: 1
  }
  const expected = (0.0069, 4.3, 0.016)
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('goatgas returns co2 figure per entry', () => {
  const data = {
    meat_id: 4,
    amount: 1
  }
  const expected = (0.0069, 4.3, 0.016)
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})
