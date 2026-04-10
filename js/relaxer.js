container = document.getElementById('container')
text = document.getElementById('text')

totalTime = 7500
breathTime = (totalTime / 5) * 2
holdTime = totalTime / 5

breathAnimation()

function breathAnimation() {
    text.innerText = 'Breathe In'
    container.classList.remove('shrink')
    container.classList.add('grow')

    setTimeout( ()=> {
        text.innerText = 'Hold';

        setTimeout( ()=> {
            text.innerText = 'Breathe Out';
            container.classList.remove('grow')
            container.classList.add('shrink')
        },holdTime)
    }, breathTime)
}

setInterval(breathAnimation, totalTime)
