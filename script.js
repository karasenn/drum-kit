function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    const color = document.querySelector(`div[data-key="${e.key}"]`)

    if(!audio) return // Stops function from running
    audio.currentTime = 0 // Rewinds to the start of audio
    audio.play()
    color.classList.add("playing") // Adds the class of playing to element so color triggers
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return // Skip this if it's not a transform element
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
