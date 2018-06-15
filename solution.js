var data = [
  [2, 3, 7, 8],
  [0, 1, 3],
  [9, 2, 8, 3]
]

let newData = []
let diff = 0
let sum = 0

function sortNumbers(a,b) {
  return a- b;
}

for (i = 0; i < data.length; i++) {
  newData = (data[i].sort(sortNumbers))
  diff = newData[data.length-1] - newData[0]
  sum += diff
}
//
// The first row's largest and smallest values are 2 and 8, their difference is 6.
// The second row's largest and smallest values are 0 and 3, their difference is 3.
// The third row's difference is 7.
// In this example, the spreadsheet's checksum would be 6 + 3 + 7 = 16.


var data2 = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]
