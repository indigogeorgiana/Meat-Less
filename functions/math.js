module.exports = {
  calcData
  // lambCarbon,
  // lambWater
}

function calcData (data) {
  if (data.meat === 'lamb') {
    const co2 = data.amount * 0.00392
    const h2o = data.amount * 7
    console.log(co2, h2o)
    return (h2o, co2)
  } else if (data.meat === 'beef') {
    const co2 = data.amount * 0.0027
    const h2o = data.amount * 15.4
    console.log(co2, h2o)
    return (h2o, co2)
  } else if (data.meat === 'pork') {
    const co2 = data.amount * 0.00121
    const h2o = data.amount * 6
    console.log(co2, h2o)
    return (h2o, co2)
  } else if (data.meat === 'chicken') {
    const co2 = data.amount * 0.00069
    const h2o = data.amount * 4.3
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
