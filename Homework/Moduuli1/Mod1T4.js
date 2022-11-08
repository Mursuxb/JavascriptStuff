'use strict';
let houselist, choice, name;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

choice = (getRandomInt(4));
// expected output: 0, 1, 2 or 3
houselist = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
name = prompt('What be your name?');
document.querySelector('#p1').innerHTML = 'Congrats ' + name + ', you are a ' +
    houselist[choice] + '!';

