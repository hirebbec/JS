let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const unEl = document.getElementById("ul-el")
// Render the leads in the unordered list using ulEl.textContent

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


for (let i = 0; i < myLeads.length; i++) {
    unEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}



