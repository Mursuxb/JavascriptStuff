'use strict';
let strnum1, strnum2, strnum3, num1, num2, num3;
strnum1 = prompt('Gimme first number');
num1 = parseInt(strnum1);
strnum2 = prompt('Gimme second number');
num2 = parseInt(strnum2);
strnum3 = prompt('Gimme third number');
num3 = parseInt(strnum3);

document.querySelector('#p1').innerHTML = strnum1 + " + " + strnum2 + " + " + strnum3 + " = " + (num1 + num2 + num3);
document.querySelector('#p2').innerHTML = strnum1 + " * " + strnum2 + " * " + strnum3 + " = " + (num1 * num2 * num3);
document.querySelector('#p3').innerHTML = "Average of " + strnum1 + ", " + strnum2 + ", " + strnum3 + " = " + ((num1 + num2 + num3) / 3);
