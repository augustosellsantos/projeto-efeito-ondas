const pause = document.querySelector('.pause')
const play = document.querySelector('.play')
const circleBtn = document.querySelector('.circle-btn')
const waves1 = document.querySelector('.waves-1')
const waves2 = document.querySelector('.waves-2')

circleBtn.addEventListener('click', (event) => {
    event.preventDefault()
    pause.classList.toggle('visibility')
    play.classList.toggle('visibility')
    waves1.classList.toggle('paused')
    waves2.classList.toggle('paused')
    circleBtn.classList.toggle('shadow')
})