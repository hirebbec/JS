let countEl = document.getElementById("count-el")
let count = Number(countEl.textContent)

function increment() {
    count = count + 1
    countEl.innerText = count
}


