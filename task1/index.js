let countEl = document.getElementById("count-el")
let count = Number(countEl.textContent)

let prevEl = document.getElementById("prev-p")

function increment() {
    count = count + 1
    countEl.textContent = count
}

function save() {
    prevEl.textContent += " - " + countEl.innerText
    countEl.textContent = 0
    count = 0
}

