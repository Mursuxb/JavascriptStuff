const trigger = document.querySelector('#trigger')
trigger.addEventListener('mouseover', (event) => {
    document.querySelector('#target').src = "img/picB.jpg"
})
trigger.addEventListener('mouseout', (event) => {
    document.querySelector('#target').src = "img/picA.jpg"
})