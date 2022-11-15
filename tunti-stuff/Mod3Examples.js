'use strict'
const p1 = document.querySelector('#testi1')
console.log(p1.innerText)
const p2 = document.createElement('p')
const body = document.body // elementin poikkeus haku. Body is cool
body.appendChild(p2)
p2.innerHTML = "I am a virus, be a aware"
