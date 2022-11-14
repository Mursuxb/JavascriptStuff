'use strict';
// Write a program that asks for the names of six dogs.
// The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)
let doglist = []
for (let dog_amount = 1; dog_amount <= 6; dog_amount++) {
    doglist.push(prompt("Dog name?"))
}
let revert_dogs = doglist.sort();
revert_dogs.reverse();

for (let x in revert_dogs) {
    const li = document.createElement('li');
    li.textContent = revert_dogs[(x)];
    document.querySelector('ul').append(li);
}