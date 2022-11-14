'use strict';
// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in the same order as they were entered. (2p)
let numpeople = prompt('How many people?');
let participants = [];
for (let times = 1; times <= numpeople; times++) {
  participants.push(prompt('Participant name?'));
}
let ordered_participants = participants.sort();

for (let x in ordered_participants) {
  const li = document.createElement('li');
  li.textContent = ordered_participants[(x)];
  document.querySelector('ol').append(li);
}


