function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //if the audio at that keycode is no present 
    //then return 
    if (!audio)
        return;
    //to start the audio again and again
    audio.currentTime = 0
    //play the audio
    audio.play()
    //add the animationas
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    //remove the class from the parrent 
    this.classList.remove('playing')
}

//remove the transition after the transition time 
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
//when user enter key then play the sound
window.addEventListener('keydown', playSound)