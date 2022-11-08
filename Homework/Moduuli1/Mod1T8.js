'use strict';

let startYear = prompt('Gimme start year');
let endYear = prompt('Gimme end year');

function LeapYear(begin, end) {
  for (let year = begin; year <= end; year++)
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        const li = document.createElement('li');
        li.textContent = year;
        document.querySelector('ul').append(li);
      } else {
        console.log('Year ' + year +
            ' is not a leap year');
      }
    } else if (year % 4 === 0) {
      const li = document.createElement('li');
      li.textContent = year;
      document.querySelector('ul').append(li);
    } else {
      console.log('Year ' + year +
          ' is not a leap year');
    }
}

LeapYear(startYear, endYear);