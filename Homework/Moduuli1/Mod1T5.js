'use strict';
let year;
year = prompt('Gimme year');

function LeapYear(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return document.querySelector('#p1').innerHTML = 'Year ' + year +
          ' is a leap year';
    } else {
      return document.querySelector('#p1').innerHTML = 'Year ' + year +
          ' is not a leap year';
    }
  } else if (year % 4 === 0) {
    return document.querySelector('#p1').innerHTML = 'Year ' + year +
        ' is a leap year';
  } else {
    return document.querySelector('#p1').innerHTML = 'Year ' + year +
        ' is not a leap year';
  }
}

LeapYear(year);
