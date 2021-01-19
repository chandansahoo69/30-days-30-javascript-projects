window.onload = function () {
    show(0);
}
//questions 
let questions = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomly Access Memory",
            "Run Accept Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "Who is the C.E.O of the Google ?",
        answer: "Sundar Pichaie",
        options: [
            "Steve Jobs",
            "Sundar Pichaie",
            "Satya Nadella",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "Who invented Electric Bulb ?",
        answer: "Thomas Edison",
        options: [
            "Hiram Maxim",
            "Albert Einstein",
            "Thomas Edison",
            "None of these"
        ]
    },
    {
        id: 4,
        question: "What is the full form of ROM ?",
        answer: "Read Only Memory",
        options: [
            "Read Only Memory",
            "Random Only Memory",
            "Read Orderly Memory",
            "None of these"
        ]
    },
    {
        id: 5,
        question: "What is the full form of ATM ?",
        answer: "Automated Teller Machine",
        options: [
            "Automated Teller Machine",
            "Automatic Time Machine",
            "Any Time Machine",
            "None of these"
        ]
    },
    {
        id: 6,
        question: "What is the full form of ANSI ?",
        answer: "American National Standards Institute",
        options: [
            "American National Star Institute",
            "American National Standford Institute",
            "American National Standards Institute",
            "None of these"
        ]
    }
]
//function
function submitForm(e) {
    //prevent the default submit
    e.preventDefault();
    //taking the input value
    let name = document.forms["welcome-form"]["name"].value;

    //store the user name in session storage
    sessionStorage.setItem('name', name);
    //send to the next page
    location.href = "quiz.html";
    // console.log(name);
}

let questionCount = 0;
let quizPoint = 0;

function next() {
    let userAnswer = document.querySelector("li.option.active").innerHTML;
    //check the answer is correct or not
    if (userAnswer === questions[questionCount].answer) {
        quizPoint += 10;
        sessionStorage.setItem("points",quizPoint);
    }

    if(questionCount === questions.length-1){
        sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds.`);
        clearInterval(myTime);
        location.href = "end.html";
        return;
    }


    questionCount++;
    //calling the show function
    show(questionCount);
}
//showing the question to the user
function show(count) {
    //selecting the quesition div
    let question = document.getElementById("questions");

    //adding a question 
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option-group">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
    </ul>
    `;
    toggleActive();
}
//add a active class in option
function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            //remove the active class if any
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            //add the active class 
            option[i].classList.add("active");
        }
    }
}

const restart = document.getElementById("restart");

restart.addEventListener('click', function(){
    sessionStorage.clear();
    location.href = "index.html";
})