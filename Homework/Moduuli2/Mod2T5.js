'use strict'
// Write a program that prompts the user for numbers.
// When the user enters one of the numbers he previously entered,
// the program will announce that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order. (2p)
let num_list = []
let not_included = true
while (not_included === true) {
    let give_num = prompt("Gimme numbers")
    if (num_list.includes(parseInt(give_num))) {
        alert("That number has already been given. Stopping.")
        not_included = false
    } else {
        num_list.push(parseInt(give_num))
    }
}
num_list.sort((a, b) => (a - b));
for (let x = 0; x <= num_list.length - 1; x++) {
    console.log(num_list[x])
}