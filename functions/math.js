module.exports = calcData

function calcData (data) {
  let co2
  let h2o
  let miles
  const id = Number(data.meat_id)
  const amount = data.amount
  if (id === 3) { // lamb
    co2 = amount * 0.0392
    h2o = amount * 7
    miles = amount * 0.091
    console.log(co2, h2o, miles)
    return (h2o, co2, miles)
  } else if (id === 1) { // beef
    co2 = amount * 0.027
    h2o = amount * 15.4
    miles = amount * 0.063
    console.log(co2, h2o, miles)
    return (h2o, co2, miles)
  } else if (id === 2) { // pork
    co2 = amount * 0.0121
    h2o = amount * 6
    miles = amount * 0.031
    console.log(co2, h2o, miles)
    return (h2o, co2, miles)
  } else if (id === 4) { // goat
    co2 = amount * 0.015
    h2o = amount * 1.59
    miles = amount * 0.016
    console.log(co2, h2o, miles)
    return (h2o, co2, miles)
  } else if (id === 5) { // poultry
    co2 = amount * 0.0069
    h2o = amount * 4.3
    miles = amount * 0.016
    console.log(co2, h2o, miles)
    return (h2o, co2, miles)
  }
}

// function lambCarbon (amount) {
//   return amount * 0.0392
// }

// function lambWater (amount) {
//   return amount * 7
// }
