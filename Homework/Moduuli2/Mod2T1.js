'use strict';
// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered. Print the result to the console.(2p)
//  Save the numbers to an array, then use for-loop to iterate in reverse order.
//  Do not use array.reverse() function.

let numlist = [];
let reversed = [];
for (let i = 1; i <= 5; i++) {
  numlist.push(+prompt('Gimme ' + i + '. number'));
}
for (let x = 1; x <= 5; x++) {
  reversed.push(numlist[numlist.length - x]);
}
document.querySelector('#p1',
).innerHTML = reversed;