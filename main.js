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

var backBtn = document.querySelector(".back");
var clearBtn = document.querySelector(".clear");
var startBtn = document.querySelector(".start");
var containerEl = document.getElementById("container");
var cardEl = document.getElementById("card");
var cardEl2 = document.getElementById("card2");
var pEl = document.getElementById("introText");
var titleEl = document.getElementById("title");
var answerBtns = document.getElementsByClassName("answer");
var answerBtn1 = document.getElementById("answer1");
var answerBtn2 = document.getElementById("answer2");
var answerBtn3 = document.getElementById("answer3");
var answerBtn4 = document.getElementById("answer4");
var countSpan = document.getElementById("timeCount");
var notification = document.getElementById("notification");
var inputEl = document.querySelector(".input");
var submitBtn = document.querySelector(".submit");
var label = document.getElementById("label");
var newScoreEl = document.getElementById("newScore");
var scoreDiv = document.querySelector(".score-div");

var currentQuestionIndex;
var interval;
var highScores = [];
// var highScore;
// var hiScores = localStorage.getItem("scores");

startBtn.addEventListener("click", function (e) {
    startQuiz();
});
// pEl.classList.add("hide");
// startBtn.classList.add("hide");
// for (i = 0; i < answerBtns.length; i++) {
//     answerBtns[i].classList.remove("hide");
// }
// var count = 75;
// countSpan += count;

function startQuiz() {
    currentQuestionIndex = 0;
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
    console.log(currentQuestionIndex);
    titleEl.textContent = questions[currentQuestionIndex].title;
    answerBtn1.textContent = questions[currentQuestionIndex].choices[0];
    answerBtn2.textContent = questions[currentQuestionIndex].choices[1];
    answerBtn3.textContent = questions[currentQuestionIndex].choices[2];
    answerBtn4.textContent = questions[currentQuestionIndex].choices[3];
    if (currentQuestionIndex === 0) {
        answerBtn2.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Correct!";
            currentQuestionIndex++;
            // setQuestion();
        })
        answerBtn3.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            currentQuestionIndex++;
            countSpan.textContent -= 10;
            // setQuestion();
        })
        answerBtn4.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            currentQuestionIndex++;
            countSpan.textContent -= 10;
            // setQuestion();
        })
        answerBtn1.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            currentQuestionIndex++;
            countSpan.textContent -= 10;
            // setQuestion();
        })
    }
    else if (currentQuestionIndex === 1) {
        answerBtn2.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            currentQuestionIndex++;
            countSpan.textContent -= 10;
            setQuestion();
        })
        answerBtn3.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            currentQuestionIndex++;
            countSpan.textContent -= 10;
            setQuestion();
        })
        answerBtn4.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Correct!";
            currentQuestionIndex++;
            setQuestion();
        })
        answerBtn1.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            currentQuestionIndex++;
            countSpan.textContent -= 10;
            setQuestion();
        })
    }
    else if (currentQuestionIndex === 2) {
        answerBtn2.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            countSpan.textContent -= 10;
            clearInterval(interval);
            endGame();
        })
        answerBtn3.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            countSpan.textContent -= 10;
            clearInterval(interval);
            endGame();
        })
        answerBtn4.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            countSpan.textContent -= 10;
            clearInterval(interval);
            endGame();
        })
        answerBtn1.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Correct!";
            clearInterval(interval);
            endGame();
        })
    }
    else if (countSpan.textContent <= 0) {
        endGame();
    }
}

function endGame() {
    titleEl.textContent = "The quiz is over!";
    for (i = 0; i < answerBtns.length; i++) {
        answerBtns[i].classList.add("hide");
    }
    label.classList.remove("hide");
    inputEl.classList.remove("hide");
    submitBtn.classList.remove("hide");
    notification.textContent = "Your final score is " + countSpan.textContent;
}

submitBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var finalScore = countSpan.textContent;
    var initials = inputEl.value;
    label.classList.add("hide");
    inputEl.classList.add("hide");
    submitBtn.classList.add("hide");
    notification.textContent = "";
    titleEl.textContent = "Highscores";

    // var newEntry = document.createElement("div");
    // newEntry.classList.add("scoreEntry");
    // newEntry.textContent = finalScore + " - " + initials;

    var scoreContent = finalScore + " - " + initials;
    highScores.push(scoreContent);
    // highScore = scoreContent;
    // storeLastScore();
    storeScores();
    // init();
    for (var i = 0; i < highScores.length; i++) {
        var score = highScores[i];

        var div = document.createElement("div");
        div.setAttribute("class", "score-div");
        div.textContent = score;
        // li.setAttribute("data-index", i);

        newScoreEl.appendChild(div);
    }

    // newScoreEl.appendChild(newEntry);
    backBtn.classList.remove("hide");
    clearBtn.classList.remove("hide");
})

backBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    pEl.classList.remove("hide");
    startBtn.classList.remove("hide");
    titleEl.textContent = "Football Quiz: 2019 - 2020";
    backBtn.classList.add("hide");
    clearBtn.classList.add("hide");
    var scoreDiv = document.getElementsByClassName("score-div");
    for (var i = 0; i < scoreDiv.length; i++) {
        scoreDiv[i].classList.add("hide");


        // window.location.href = "index.html";
    }
})

clearBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var scoreDiv = document.getElementsByClassName("score-div");
    for (var i = 0; i < scoreDiv.length; i++) {
        newScoreEl.removeChild(scoreDiv[i]);
        // highScores.pop([i]);


        // window.location.href = "index.html";
    }

})

// function renderScores() {
//     for (var i = 0; i < highScores.length; i++) {
//         var score = highScores[i];

//         var div = document.createElement("div");
//         div.textContent = score;
//         // li.setAttribute("data-index", i);

//         newScoreEl.appendChild(div);
//     }
// }

function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedScores = localStorage.getItem("scores");
    //JSON.parse()
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedScores !== null) {
        // highScores = storedScores;
        console.log(storedScores);
        // highScores.push(storedScores);
        storedScores.push(highScores[0]);
        console.log(highScores);

    }
}
// Render todos to the DOM
// renderScores();
// }

function storeScores() {
    // Stringify and set "todos" key in localStorage to todos array
    //JSON.stringify()
    localStorage.setItem("scores", highScores);
    var storedScores = localStorage.getItem("scores");
    // if (storedScores !== null) {
    //     highScores.push(storedScores);
    // }
    console.log(storedScores);
};

// function storeLastScore() {
//     localStorage.setItem("lastScore", highScores[0]);
//     var storedLastScore = localStorage.getItem("lastScore");
//     localStorage.setItem("allScores")

//     highScores.push()
// }
    // clearBtn.addEventListener("click", function (e) {

    // })

    // function calculateScore() {
    //     score = countSpan.textContent;
    // }

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