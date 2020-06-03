
const progressBar = document.getElementsByClassName('progress-bar')[0]
const bubbleNumber = document.getElementsByClassName('bubble__number')[0]
const bubbleUsed = document.getElementsByClassName('bubble__used')[0]

let contador = 0

const counter = setInterval(() => {
    contador++
    const computerStyle = getComputedStyle(progressBar)
    const width = parseFloat(computerStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + 0.1)
    
    
    bubbleNumber.innerHTML = 1000 - (width * 1000) / 100
    bubbleUsed.innerHTML = (width * 1000) / 100

    if (width === 81.5) {
        clearInterval(counter)
    }


}, 15)

 