module.exports = calcData

function calcData (data) {
  const id = Number(data.meat_id)
  console.log(data)
  const amount = data.amount
  if (id === 3) { // lamb
    const co2 = amount * 0.0392
    const h2o = amount * 7
    console.log(co2, h2o)
    return (h2o, co2)
  } else if (id === 1) { // beef
    const co2 = amount * 0.027
    const h2o = amount * 15.4
    console.log(co2, h2o)
    return (h2o, co2)
  } else if (id === 2) { // pork
    const co2 = amount * 0.0121
    const h2o = amount * 6
    console.log(co2, h2o)
    return (h2o, co2)
  } else if (id === 4) { // goat
    const co2 = amount * 0.015
    const h2o = amount * 1.59
    console.log(co2, h2o)
    return (h2o, co2)
  } else if (id === 5) { // poultry
    const co2 = amount * 0.0069
    const h2o = amount * 4.3
    console.log(co2, h2o)
    return (h2o, co2)
  }
}

// function lambCarbon (amount) {
//   return amount * 0.0392
// }

// function lambWater (amount) {
//   return amount * 7
// }
