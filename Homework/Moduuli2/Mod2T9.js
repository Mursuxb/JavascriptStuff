'use strict'
// Write a function called even(), which receives an array containing numbers as a parameter.
// The function returns a second (usually smaller) array which has the even numbers of the original array.
// The function must not make changes to the original table. (3p)
//     Example: In a three-item array, there are items 2, 7 and 4.
//     The function returns a two-item array with items 2 and 4.
//     Print both the original array and the new array to the console in the main program after you have called the function.
//     You can hardcode the array, no need for prompt().
function even(num_array) {
    let even_nums = []
    for (let index in num_array) {
        let tested_num = num_array[index]
        if (tested_num % 2 === 0) {
            even_nums.push(tested_num)
        }
    }
    return even_nums
}

let numbers = [2, 4, 5, 10, 100, 69, 101, 99, 98]
let even_array = even(numbers)
console.log("Original array: " + numbers)
console.log("Even numbers: " + even_array)