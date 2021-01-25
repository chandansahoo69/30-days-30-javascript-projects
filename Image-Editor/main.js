const form = document.getElementById('form');
const targetImage = document.getElementById('targetImage');
const inputRange = document.querySelectorAll('.slider');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const url = document.getElementById('url');
    const urlVlaue = url.value;
    targetImage.setAttribute('src', urlVlaue);

})

inputRange.forEach(elm => {
    elm.addEventListener('input', editImage);
})

function editImage() {
    const gs = document.getElementById('gs');
    const blur = document.getElementById('blur');
    const hueRotate = document.getElementById('hueRotate');
    // const targetImage = document.getElementById('targetImage');

    let gsVal = gs.value;
    let blurVal = blur.value;
    let hueRotateVal = hueRotate.value;
    // let gsVal = gs.value;

    targetImage.style.filter = `grayscale(${gsVal}%) blur(${blurVal * .30}px) hue-rotate(${hueRotateVal}deg)`;
}
