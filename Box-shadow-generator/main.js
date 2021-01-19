let hl = document.getElementById('hl');
let vl = document.getElementById('vl');
let bl = document.getElementById('bl');
let cl = document.getElementById('cl');
let bcl = document.getElementById('bcl');
const box = document.getElementById('box');
const checkOn = document.getElementById('checkOn');
const show = document.getElementById('show');
const clipboardEl = document.getElementById('clipboard');

hl.addEventListener('input', change);
vl.addEventListener('input', change);
bl.addEventListener('input', change);
cl.addEventListener('input', change);
checkOn.addEventListener('input', change);
bcl.addEventListener('input', changeColor)

//copy password to clipboard
clipboardEl.addEventListener('click', () => {
    //creating a textarea
    const textarea = document.createElement('textarea');
    const password = show.innerText;

    if (!password) {
        return;
    }
    //copy the password to the textarea
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied to clipboard');
})

function change(params) {
    let check = document.querySelector('input[type="checkbox"]:checked')

    let hl = document.getElementById('hl').value;
    let vl = document.getElementById('vl').value;
    let bl = document.getElementById('bl').value;
    let cl = document.getElementById('cl').value;

    if (check == null) {
        box.style.boxShadow = `${hl}px ${vl}px ${bl}px ${cl}`
        show.innerHTML = `box-shadow: ${hl}px ${vl}px ${bl}px ${cl};`
    } else {
        box.style.boxShadow = `inset ${hl}px ${vl}px ${bl}px ${cl}`
        show.innerHTML = `box-shadow: inset ${hl}px ${vl}px ${bl}px ${cl};`
    }
}
function changeColor(params) {
    let bcl = document.getElementById('bcl').value;
    box.style.backgroundColor = bcl;
}