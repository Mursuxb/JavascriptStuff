'use strict';
let confirmation, GivenNum, SquareRoot;
confirmation = confirm("Should I calculate the square root?")
if (confirmation == false) {
    document.querySelector('#p1').innerHTML = "The square root is not calculated."
} else {
    GivenNum = prompt("Gimme number")
    if (GivenNum < 0) {
        document.querySelector('#p1'
        ).innerHTML = "The square root of a negative number is not defined"
    } else {
        SquareRoot = Math.sqrt(GivenNum)
        document.querySelector('#p1'
        ).innerHTML = "The square root of " + GivenNum + " is " + SquareRoot
    }
}
