const math = require('../functions/math')

test('lambCarbon returns co2 figure per entry', () => {
  const expected = 3.92
  const amount = 100
  const actual = math.lambCarbon(amount)
  expect(actual).toBe(expected)
})

test('lambWater returns water figure per entry', () => {
  const expected = 700
  const amount = 100
  const actual = math.lambWater(amount)
  expect(actual).toBe(expected)
})
