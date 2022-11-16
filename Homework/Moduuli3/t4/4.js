'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const target = document.querySelector('#target')
for (let x in students) {
  const c_option = document.createElement('option')
  target.appendChild(c_option)
  let option = document.getElementsByTagName('option')[x].value = students[x].id
  c_option.innerHTML = students[x].name
}
