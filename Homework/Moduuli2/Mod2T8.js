'use strict'
// Write a function called concat(), which receives an array of strings as a parameter.
// The function returns a string formed by concatenating the elements of the array. (2p)
//     Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky. The function returns the string JohnnyDeeDeeJoeyMarky.
//     Do not use array.join() function
//     You can hardcode the array, no need for prompt().
//     Print the result to HTML document.
function concat(array) {
    let monster = ""
    for (let index in array) {
        monster = monster + array[index]
    }
    return monster
}

let str_array = ["Johnny", "DeeDee", "Joey", "Marky"]
let array_mess = concat(str_array)
document.querySelector('#p1'
).innerHTML = array_mess