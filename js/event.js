const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')

element1.addEventListener('click', ()=>{
    element1.innerHTML = "I've been clicked! <br> Try double clicking me."
})

element1.addEventListener('dbclick', ()=>{
    element1.innerHTML = "I've been double clicked! <br> Try single clicking me."
})


element2.addEventListener('mouseover', ()=>{
    element2.style.color = "green"
    element2.style.backgroundColor = "blue"
})

element2.addEventListener('mouseout', ()=>{
    element2.style.color = "white"
    element2.style.color = "#BB33BB"
})
