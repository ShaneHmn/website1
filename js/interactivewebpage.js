const element = document.getElementById('element')

let positionY = 0;
let positionX = 0;

document.addEventListener('keyup', (interactivewebpage)=>{
    console.log(interactivewebpage.key)

    if(interactivewebpage.key == 'ArrowDown') {
        positionY = positionY + 10
    }
    else if (interactivewebpage.key == 'ArrowUp') {
        positionY = positionY - 10
    }
    else if (interactivewebpage.key == 'ArrowLeft') {
        positionX = positionX - 10
    }
    else if (interactivewebpage.key == 'ArrowRight') {
        positionX = positionX + 10
    }
    element.style.top = `${positionY}px`
    element.style.left = `${positionX}px`
})
