let operation = document.querySelector('#operation')
let result = document.querySelector('#result')
let button = document.querySelector('#start')
//Button effects
button.addEventListener('click', function (evt) {
    let num1 = document.querySelector('#num1').value
    let num2 = document.querySelector('#num2').value
    if (operation.value === "add") {
        let sum = (parseInt(num1) + parseInt(num2))
        result.textContent = sum.toString()
    } else if (operation.value === "sub") {
        let sub = (parseInt(num1) - parseInt(num2))
        result.textContent = sub.toString()
    } else if (operation.value === "multi") {
        let multiply = (parseInt(num1) * parseInt(num2))
        result.textContent = multiply.toString()
    } else if (operation.value === "div") {
        let divide = (parseInt(num1) / parseInt(num2))
        result.textContent = divide.toString()
    }
})