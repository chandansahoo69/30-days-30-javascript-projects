//initialize the speech
const msg = new SpeechSynthesisUtterance();
//to get the voice avilable in chrome
let voices = [];
//select elements
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
//get the value of the textarea
msg.text = document.querySelector('[name="text"]').value;

//it is for getting the chrome voice and show all the 
//voices to the drop down 
function populateVoices() {
    //get the voice 
    voices = this.getVoices();

    // console.log(voices);

    //select the element dropdown then map 
    //over all the voice present in the chrome and 
    //show it as an option
    voicesDropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`)
        .join('');
}
//change the voice to device
speechSynthesis.addEventListener('voiceschanged', populateVoices);
//when voice chages then change the voice
voicesDropdown.addEventListener('change', changingVoice);
//notice which range is changed according to that 
//speak again
options.forEach(option => option.addEventListener('change', setOption))
//when press the start button then start speek
speakButton.addEventListener('click', toggle);
//when press stop then pass flase 
stopButton.addEventListener('click', () => toggle(false));

function changingVoice() {
    //set the voice to the element 
    //find will give the result which voice you are clicked
    msg.voice = voices.find(voice => voice.name === this.name)
    //after changing the voice then also skeak
    speechSynthesis.speak(msg);
}
//for speak when the page load
speechSynthesis.speak(msg);

function toggle(startOver = true) {
    //when we click again and again then voice is 
    //run again and again

    //if the argument is false then cancel
    speechSynthesis.cancel();
    //if it is true then speak else not 
    //when you press again and again then it pass ture, flase, t, f, t ,f...
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    // console.log(this.name, this.value);

    //set the value of input range according to the value
    //of pitch and rate of voice
    msg[this.name] = this.value;
    //after range setting then again speek
    toggle();
}