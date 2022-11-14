'use strict';
// Write a program that asks for the names of six dogs.
// The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)
let doglist = []
for (let dog_ammount = 6; dog_ammount >= 0; dog_ammount--){
  doglist.push(prompt("Dog name?"))
}
let revert_dog = doglist.sort

for (let x in reverse_dogs){
  const li = document.createElement('li');
  li.textContent = reverse_dogs[(x)];
  document.querySelector('ul').append(li);
}