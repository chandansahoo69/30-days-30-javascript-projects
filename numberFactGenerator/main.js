let inputNumber = document.getElementById('inputNumber');
let fact = document.getElementById('fact');
let factDiv = document.getElementById('factDiv');
factDiv.style.display = 'none';

inputNumber.addEventListener('input', getFacts);

async function getFacts() {
    let number = inputNumber.value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/' + number, true);
    xhr.onload = function () {
        if (this.status = 200 && number != "") {
            factDiv.style.display = 'block';
            fact.innerHTML = this.responseText;
        }
    }
    xhr.send();
}