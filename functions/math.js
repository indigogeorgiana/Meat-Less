module.exports = calcData

function calcData (data) {
  let table = {
    co2: 0,
    h2o: 0,
    miles: 0
  }
  const id = Number(data.meat_id)
  const amount = data.amount
  if (id === 3) { // lamb
    table.co2 = amount * 0.0392
    table.h2o = amount * 7
    table.miles = amount * 0.091
    return table
  } else if (id === 1) { // beef
    table.co2 = amount * 0.027
    table.h2o = amount * 15.4
    table.miles = amount * 0.063
    return table
  } else if (id === 2) { // pork
    table.moduleco2 = amount * 0.0121
    table.moduleh2o = amount * 6
    table.modulemiles = amount * 0.031
    return table
  } else if (id === 4) { // goat
    table.co2 = amount * 0.015
    table.h2o = amount * 1.59
    table.miles = amount * 0.016
    return table
  } else if (id === 5) { // poultry
    table.co2 = amount * 0.0069
    table.h2o = amount * 4.3
    table.miles = amount * 0.016
    return table
  }
}
