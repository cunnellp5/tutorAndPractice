var store = require('./store3-data.js')
// Hint: Don't forget to require in your data! Refer to store1 or store2 exercise.js files on how to do this.

//()()()()() ACCESSING DATA ()()()()()\\
const inventory = 'inventory sold'
// Return Berry Bites data for store3 on January 7.
function accessesingData1() {
  let candy = "Berry Bites"
  return store[1][inventory][candy]
}
// Return how many Mint Wafers were sold on January 9th
function accessesingData2() {
  let candy = "Mint Wafers"
  return store[3][inventory][candy].quantity
}



// Return total number of dates included in the dataset.
function accessesingData3() {
  var date = [];
  for (var i = 0; i < store.length; i++) {
    date.push(store[i].date)
  }
  return date.length
}

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to return an array of dates contained in the sale data.
function loopingData1() {
  var date = [];
  for (var i = 0; i < store.length; i++) {
    date.push(store[i].date)
  }
  return date
}

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2() {
  var obj = {};
  var stuff = store[4]['inventory sold']
  var short = Object.keys(stuff)

  for (var i = 0; i < short.length; i++) {
    var candy = short[i]
    var price = stuff[candy].cost
    obj[candy] = price
  }
  return obj
}


// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3() {
  var total = 0;
  for (var i = 0; i < store.length; i++) {
    total += store[i]['inventory sold']['Peanut Butter Buttered Peanuts'].quantity
  }
  return total
}

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1() {
  var total = 0;
  var inv = store[3]['inventory sold']
  for (var i = 0 in inv) {
    total += inv[i].quantity * inv[i].cost
  }
  return total.toFixed(2)
}
console.log(challenge1(store));


module.exports = {
  accessesingData1,
  accessesingData2,
  accessesingData3,
  loopingData1,
  loopingData2,
  loopingData3,
  challenge1
}
