'use strict';
// num1 = prompt("Gimme First Number")
// num2 = prompt("Gimme Second Number")
// num3 = prompt("Gimme Third Number")
// num4 = prompt("Gimme Fourth Number")
// num5 = prompt("Gimme Fifth Number")
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