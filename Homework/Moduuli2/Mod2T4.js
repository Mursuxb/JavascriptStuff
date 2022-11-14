'use strict';
// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)
let num_list = []
let not_zero = true
while (not_zero === true) {
    let give_num = prompt("Gimme numbers")
    if (give_num === '0') {
        not_zero = false
    } else {
        num_list.push(parseInt(give_num))
    }
}
num_list.sort((a, b) => (b - a));
for (let x = 0; x <= num_list.length - 1; x++) {
    console.log(num_list[x])
}