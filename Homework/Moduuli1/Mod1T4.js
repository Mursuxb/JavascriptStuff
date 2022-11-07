'use strict';
let houselist, choice, name;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

choice = (getRandomInt(4));
// expected output: 0, 1, 2 or 3
houselist = ['Griffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
name = prompt('What be your name?');
document.querySelector('#p2').innerHTML = 'Congratz ' + name + ', you are a ' +
    houselist[choice] + '!';

