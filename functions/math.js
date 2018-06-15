module.exports = {
  calcData,
  lambCarbon,
  lambWater
}

function calcData (data) {
  return data * 10
}

function lambCarbon (amount) {
  return amount * 0.0392
}

function lambWater (amount) {
  return amount * 7
}
