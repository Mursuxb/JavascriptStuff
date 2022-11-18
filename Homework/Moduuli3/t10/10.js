const form = document.getElementById('source')
const target = document.getElementById('target')
form.addEventListener('submit', function (evt) {
    let firstname = document.querySelector('input[name=firstname]').value
    let lastname = document.querySelector('input[name=lastname]').value
    evt.preventDefault()
    target.innerText = `Your name is ${firstname} ${lastname}`
})