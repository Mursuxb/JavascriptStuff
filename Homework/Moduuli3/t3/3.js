'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector('#target')
for (let x in names) {
    const li = document.createElement('li')
    target.appendChild(li)
    let list_item = document.getElementsByTagName('li')[x]
    list_item.innerHTML = names[x]
}
