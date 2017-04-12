var store = require('./store4-data.js')
// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^
// Return the cost of 'Dark Chocolate Crunchies' from store4
function accessesingData1() {
  return store['Dark Chocolate Crunchies'].cost
}
// Return the total number of 'Berry Bites' sold by store4
function accessesingData2() {
  return store['Berry Bites']['sold on'].length
}


// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candy names that cost more than $2.00
function loopingData1() {
  var candy = [];
  var keys = Object.keys(store)
  for (var i = 0; i < keys.length; i++) {
    if (store[keys[i]].cost > 2.00) {
      candy.push(keys[i])
    }
  }
  return candy
}

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loopingData2() {
  var answer = {};
  var candy = Object.keys(store)
  for (var i = 0; i < candy.length; i++) {
    answer[candy[i]] = store[candy[i]].cost
  }
  return answer
}
// console.log(loopingData2(store));


// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? Each date represents 1 item sold. Round revenue to two decimal points.
// Return your answer as an array: `[total1, total2]`
function challenge1() {
  var answer = [];
  var pep = store['Peppermint Poppers']
  var ct = store['Caramel Twists']
  answer.push((pep.cost)*(pep['sold on'].length))
  answer.push(((ct.cost)*(ct['sold on'].length)).toFixed(2))
  return answer
}
console.log(challenge1(store));

// Calculate and return how much money store4 made on January 9th. Round to two decimal points.
function challenge2() {

}

// Calculate and return how much store4 made from selling Dark Chocolate Crunchies across all the days. Round to two decimal points.
function challenge3() {

}


module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  challenge1,
  challenge2,
  challenge3,
}
