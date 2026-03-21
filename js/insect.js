screens = document.querySelectorAll('.schreen')
choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
start_btn = document.getElementById('start-btn')
game_container = document.querySelector('.game-container')


start_btn.addEventListener('click', ()=> {
    screens[0].classList.add('up')
})

for (let i = 0; i < choose_insect_btns.length; i++)
{
    choose_insect_btns[i].addEventListener('click', ()=> {
        screens[1].classlist.add('up')
        img = choose_insect_btns[i].querySelector('img')
        src = img.getAttribute('src')
        alt = img.getAttribute('alt')
        startGame()
    })
}


function startGame() {
    setTimeout(createinsect, 1000)
}

function createinsect() {
    insect = document.createElement('div')
    insect.classList.add('insect')
    const {x,y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${src}" alt="${alt}" style="transform: rotate(${Math.random()*360}deg)">`
    game_container.appendChild(insect)
}

function getRandomLocation() {
    width = window.innerWidth
    height = window.innerHeight
    x = Math.random()*(width - 200) + 100
    y = Math.random()*(height - 200) + 100
    return (x, y)
}


function catchInsect() {
    //increaseScore()
    this.classList.add('caught')
    setTimeout( ()=> this.remove(), 2000)
    setTimeout(createInsect, 1000)
}
