let button = document.querySelector('#start')
let result = document.querySelector('#result')
button.addEventListener('click', function (evt) {
    let calculation = document.querySelector('#calculation').value
    if (calculation.includes('+')) {
        let split_calc = calculation.split("+")
        let sum = (parseInt(split_calc[0]) + parseInt(split_calc[1])).toString()
        result.textContent = sum
    }
    else if (calculation.includes('-')) {
        let split_calc = calculation.split("-")
        let sub = (parseInt(split_calc[0]) - parseInt(split_calc[1])).toString()
        result.textContent = sub
    }
    else if (calculation.includes('*')) {
        let split_calc = calculation.split("*")
        let multiply = (parseInt(split_calc[0]) * parseInt(split_calc[1])).toString()
        result.textContent = multiply
    }
    else if (calculation.includes('/')) {
        let split_calc = calculation.split("/")
        let divide = (parseInt(split_calc[0]) / parseInt(split_calc[1])).toString()
        result.textContent = divide
    }
})