'use strict'
// Modify the function above so that it gets the number of sides on the dice as a parameter.
// With the modified function you can for example roll a 21-sided role-playing dice.
// The difference to the last exercise is that the dice rolling in the main program continues until the program gets the maximum number on the dice,
// which is asked from the user at the beginning. (2p)
function DiceRoll(sides) {
    return Math.ceil(Math.random() * sides)
}

let side_ammount = parseInt(prompt("How many sides on the dice?"))
let not_cap = true
while (not_cap === true) {
    let roll = DiceRoll(side_ammount)
    if (roll === side_ammount) {
        not_cap = false
    }
    const li = document.createElement('li');
    li.textContent = roll;
    document.querySelector('ul').append(li);
}