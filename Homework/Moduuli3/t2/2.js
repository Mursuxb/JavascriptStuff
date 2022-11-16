const target = document.querySelector('#target')
for (let x = 1; x <= 3; x++) {
    const li = document.createElement('li')
    if (x === 1){
        li.textContent = "First item"
    }
    else if (x === 2){
        li.textContent = "Second item"
    }
    else {
        li.textContent = "Third item"
    }
    target.appendChild(li)
}
