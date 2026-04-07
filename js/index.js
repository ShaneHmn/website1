secret = document.querySelector('.secret')

secret.addEventListener('mouseover', ()=> {
    secret.style.color = "yellow"
})

secret.addEventListener('mouseout', ()=> {
    secret.style.color = "rgb(121,28,158)"
})
