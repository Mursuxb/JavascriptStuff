'use strict';

function DiceRoll(DiceAmmount) {
    let DiceList = []
    let Rolls = 0
    do {
        DiceList.push(Math.ceil(Math.random() * 6));
        Rolls++;
    } while (Rolls != DiceAmmount);
    return DiceList
}

let AmmountDice = prompt("How many dice would you like to roll?")
let ResultList = DiceRoll(AmmountDice)

document.querySelector('#p1').innerHTML = "Rolls were " + ResultList
let sum = ResultList.reduce((partialSum, a) => partialSum + a, 0)
document.querySelector('#p2').innerHTML = "The sum of the dice is " + sum