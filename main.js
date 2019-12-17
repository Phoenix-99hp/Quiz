var questions = [
    {
        title: "Who won the Heisman Trophy during the 2019 - 2020 season?",
        choices: ["Jalen Hurts", "Joe Burrow", "Justin Fields", "Chase Young"],
        answer: "Joe Burrow"
    },
    {
        title: "The Oklahoma Sooners are the only team to make the college football playoff with a loss. Who did they lose to during the 2019 - 2020 regular season?",
        choices: ["Baylor", "Iowa State", "Texas", "Kansas State"],
        answer: "Kansas State"
    },
    {
        title: "Which team did not make the college football playoff during the 2019 - 2020 season for the first time in history?",
        choices: ["Alabama", "Clemson", "Florida State", "Ohio State"],
        answer: "Alabama"
    }
];

var startBtn = document.querySelector(".start");
var containerEl = document.getElementById("container");
var cardEl = document.getElementById("card");
var pEl = document.getElementById("introText");
var titleEl = document.getElementById("title");
var answerBtns = document.getElementsByClassName("answer");
var answerBtn1 = document.getElementById("answer1");
var answerBtn2 = document.getElementById("answer2");
var answerBtn3 = document.getElementById("answer3");
var answerBtn4 = document.getElementById("answer4");
var countSpan = document.getElementById("timeCount");
var notification = document.getElementById("notification");
var currentQuestionIndex = 0;
var interval;

startBtn.addEventListener("click", startQuiz);
// pEl.classList.add("hide");
// startBtn.classList.add("hide");
// for (i = 0; i < answerBtns.length; i++) {
//     answerBtns[i].classList.remove("hide");
// }
// var count = 75;
// countSpan += count;

function startQuiz() {
    pEl.classList.add("hide");
    startBtn.classList.add("hide");
    for (i = 0; i < answerBtns.length; i++) {
        answerBtns[i].classList.remove("hide");
    }
    setQuestion();
    countSpan.textContent = 45;
    interval = setInterval(decreaseSeconds, 1000);
}

function decreaseSeconds() {
    if (countSpan.textContent != 0) {
        countSpan.textContent--;
    }
    else if (countSpan.textContent == 0) {
        clearInterval(interval);
    }
}

function setQuestion() {
    titleEl.textContent = questions[currentQuestionIndex].title;
    answerBtn1.textContent = questions[currentQuestionIndex].choices[0];
    answerBtn2.textContent = questions[currentQuestionIndex].choices[1];
    answerBtn3.textContent = questions[currentQuestionIndex].choices[2];
    answerBtn4.textContent = questions[currentQuestionIndex].choices[3];
    currentQuestionIndex++;
    if (currentQuestionIndex == 1) {
        answerBtn2.addEventListener("click", function (e) {
            notification.textContent = "Correct!";
            setQuestion();
        })
        answerBtn3.addEventListener("click", function (e) {
            notification.textContent = "Incorrect!";
            setQuestion();
        })
        answerBtn4.addEventListener("click", function (e) {
            notification.textContent = "Incorrect!";
            setQuestion();
        })
        answerBtn1.addEventListener("click", function (e) {
            notification.textContent = "Incorrect!";
            setQuestion();
        })
    }
    else if (currentQuestionIndex == 2) {
        answerBtn2.addEventListener("click", function (e) {
            notification.textContent = "Incorrect!";
            setQuestion();
        })
        answerBtn3.addEventListener("click", function (e) {
            notification.textContent = "Incorrect!";
            setQuestion();
        })
        answerBtn4.addEventListener("click", function (e) {
            notification.textContent = "Correct!";
            setQuestion();
        })
        answerBtn1.addEventListener("click", function (e) {
            notification.textContent = "Incorrect!";
            setQuestion();
        })
    }
    else if (currentQuestionIndex == 3) {
        answerBtn2.addEventListener("click", function (e) {
            notification.textContent = "Incorrect!";
            clearInterval(interval);
        })
        answerBtn3.addEventListener("click", function (e) {
            notification.textContent = "Incorrect!";
            clearInterval(interval);
        })
        answerBtn4.addEventListener("click", function (e) {
            notification.textContent = "Incorrect!";
            clearInterval(interval);
        })
        answerBtn1.addEventListener("click", function (e) {
            notification.textContent = "Correct!";
            clearInterval(interval);
        })
    }
}

function endGame() {

}

function calculateScore() {
    score = countSpan.textContent;
}

// renderQuestionOne();

// if (currentQuestionIndex == 1) {
//     answerBtn2.addEventListener("click", function (e) {
//         notification.textContent = "Correct!";
//         setQuestion();
//     })
//     answerBtn3.addEventListener("click", function (e) {
//         notification.textContent = "Incorrect!";
//         setQuestion();
//     })
//     answerBtn4.addEventListener("click", function (e) {
//         notification.textContent = "Incorrect!";
//         setQuestion();
//     })
//     answerBtn1.addEventListener("click", function (e) {
//         notification.textContent = "Incorrect!";
//         setQuestion();
//     })
// }
// else if (currentQuestionIndex == 2) {
//     answerBtn2.addEventListener("click", function (e) {
//         notification.textContent = "Incorrect!";
//     })
//     answerBtn3.addEventListener("click", function (e) {
//         notification.textContent = "Incorrect!";
//     })
//     answerBtn4.addEventListener("click", function (e) {
//         notification.textContent = "Correct!";
//     })
//     answerBtn1.addEventListener("click", function (e) {
//         notification.textContent = "Incorrect!";
//     })
// }





// function renderQuestionOne() {
//     titleEl.textContent = questions[0].title;
//     answerBtn1.textContent = questions[0].choices[0];
//     answerBtn2.textContent = questions[0].choices[1];
//     answerBtn3.textContent = questions[0].choices[2];
//     answerBtn4.textContent = questions[0].choices[3];
// }

// function renderQuestionTwo() {
//     titleEl.textContent = questions[1].title;
//     answerBtn1.textContent = questions[1].choices[0];
//     answerBtn2.textContent = questions[1].choices[1];
//     answerBtn3.textContent = questions[1].choices[2];
//     answerBtn4.textContent = questions[1].choices[3];
// }

// function checkAnswer() {


// }

//   // if (answerBtn4.clicked === true) {
    //     notification.textContent = "Correct!";
    //     // renderQuestionThree();
    // }
    // else if (answerBtn1.clicked === true || answerBtn3.clicked === true ||
    //     answerBtn2.clicked === true) {
    //     notification.textContent = "Wrong!";
    //     // renderQuestionThree();
    // }

// function renderQuestionThree() {
//     titleEl.textContent = questions[2].title;
//     answerEl1.textContent = questions[2].choices[0];
//     answerEl2.textContent = questions[2].choices[1];
//     answerEl3.textContent = questions[2].choices[2];
//     answerEl4.textContent = questions[2].choices[3];
// }


