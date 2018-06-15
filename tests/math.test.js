const math = require('../functions/math')

test('lambgas returns co2 figure per entry', () => {
  const data = {
    meat_id: 3,
    amount: 100
  }
  const expected = 3.92
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('lambaqua returns water figure per entry', () => {
  const data = {
    meat_id: 3,
    amount: 100
  }
  const expected = 700
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('beefgas returns co2 figure per entry', () => {
  const data = {
    meat_id: 'beef',
    amount: 100
  }
  const expected = 2.7
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('beefaqua returns water figure per entry', () => {
  const data = {
    meat_id: 'beef',
    amount: 100
  }
  const expected = 1540
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('porkgas returns co2 figure per entry', () => {
  const data = {
    meat_id: 'pork',
    amount: 100
  }
  const expected = 1.21
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('porkaqua returns water figure per entry', () => {
  const data = {
    meat_id: 'port',
    amount: 100
  }
  const expected = 600
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('poultrygas returns co2 figure per entry', () => {
  const data = {
    meat_id: 'poultry',
    amount: 100
  }
  const expected = 0.69
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('poultryaqua returns water figure per entry', () => {
  const data = {
    meat_id: 'poultry',
    amount: 100
  }
  const expected = 430
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('goatgas returns co2 figure per entry', () => {
  const data = {
    meat_id: 'goat',
    amount: 100
  }
  const expected = 0.69
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})

test('goataqua returns water figure per entry', () => {
  const data = {
    meat_id: 'goat',
    amount: 100
  }
  const expected = 430
  const amount = data
  const actual = math(amount)
  expect(actual).toBe(expected)
})
