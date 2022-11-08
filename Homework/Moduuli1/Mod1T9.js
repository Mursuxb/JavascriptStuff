'use strict';
let strnum = prompt('Gimme number');
let num = parseInt(strnum)
let prime = false

if (num > 1) {
  for (let i = 2; i != num; i++) {
    if (num % i === 0) {
      prime = true;
      break
    }
  }
}
if (prime === false) {
  document.querySelector('#p1'
        ).innerHTML = num + " is a prime number"
}
if (prime === true) {
  document.querySelector('#p1'
        ).innerHTML = num + " is NOT a prime number"
}
