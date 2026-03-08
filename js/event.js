const element1 = document.getElementById('element1')

element1.addEventListener('click', ()=>{
    element1.innerHTML = "I've been clicked! <br> Try double clicking me."
})

element1.addEventListener('dbclick', ()=>{
    element1.innerHTML = "I've been double clicked! <br> Try single clicking me."
})
