// Push the value from the inputEl into the myLeads array 
// instead of the hard-coded "www.awesomeleads.com" value
// Google -> "get value from input field javascript"

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtnEl = document.getElementById("input-btn")

inputBtnEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})



