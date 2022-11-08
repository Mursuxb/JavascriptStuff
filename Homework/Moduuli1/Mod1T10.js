'use strict';
let numdice = prompt("How many dice?")
let strsumdice = prompt("What sum do you want?")
let sumdice = parseInt(strsumdice)
let rolls = 10000
let successfulrolls = 0
function DiceRoll(DiceAmmount) {
    let DiceList = []
    let Rolls = 0
    do {
        DiceList.push(Math.ceil(Math.random() * 6));
        Rolls++;
    } while (Rolls != DiceAmmount);
    return DiceList
}
for (let times = 0; times <= rolls; times++){
  console.log(times)
  let ResultList = DiceRoll(numdice)
  let sum = ResultList.reduce((partialSum, a) => partialSum + a, 0)
  if (sum === sumdice) {
    successfulrolls++
  }
}
let propability = ((successfulrolls/rolls)*100).toFixed(2)
document.querySelector('#p1'
        ).innerHTML = "Chances of getting " + strsumdice + " with " + numdice +  " dice is " + propability + ' %'