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
var viewBtn = document.querySelector(".view");

var currentQuestionIndex = 0;
var interval;
var highScores = [];
init();

startBtn.addEventListener("click", function (e) {
    startQuiz();
});

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
            currentQuestionIndex = 1;
            setQuestion();
        })
        answerBtn3.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            countSpan.textContent -= 10;
            currentQuestionIndex = 1;
            setQuestion();
        })
        answerBtn4.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            countSpan.textContent -= 10;
            currentQuestionIndex = 1;
            setQuestion();
        })
        answerBtn1.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            countSpan.textContent -= 10;
            currentQuestionIndex = 1;
            setQuestion();
        })
    }
    else if (currentQuestionIndex === 1) {
        answerBtn2.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            countSpan.textContent -= 10
            currentQuestionIndex = 2;
            setQuestion();
        })
        answerBtn3.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            countSpan.textContent -= 10;
            currentQuestionIndex = 2;
            setQuestion();
        })
        answerBtn4.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Correct!";
            currentQuestionIndex = 2;
            setQuestion();
        })
        answerBtn1.addEventListener("click", function (e) {
            e.stopPropagation();
            notification.textContent = "Incorrect!";
            countSpan.textContent -= 10;
            currentQuestionIndex = 2;
            setQuestion();
        })
    }
    else if (currentQuestionIndex === 2) {
        answerBtn2.addEventListener("click", function (e) {
            e.stopPropagation();
            countSpan.textContent -= 10;
            notification.textContent = "Incorrect!";
            clearInterval(interval);
            endGame();
        })
        answerBtn3.addEventListener("click", function (e) {
            e.stopPropagation();
            countSpan.textContent -= 10;
            notification.textContent = "Incorrect!";
            clearInterval(interval);
            endGame();
        })
        answerBtn4.addEventListener("click", function (e) {
            e.stopPropagation();
            countSpan.texContent -= 10;
            notification.textContent = "Incorrect!";
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
    var newScoreObject = { name: initials, total: finalScore }
    highScores.push(newScoreObject);
    storeScores();
    for (var i = 0; i < highScores.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "score-div");
        div.textContent = highScores[i].name + " : " + highScores[i].total;
        newScoreEl.appendChild(div);
    }
    backBtn.classList.remove("hide");
    clearBtn.classList.remove("hide");
})

backBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    window.location.href = "index.html";

})

clearBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var scoreDiv = document.querySelector(".score-div");
    newScoreEl.removeChild(scoreDiv);
    highScores.splice(0, 1);
    storeScores();
})

function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
        highScores = storedScores;
    }
}

function storeScores() {
    localStorage.setItem("scores", JSON.stringify(highScores));
};

viewBtn.addEventListener("click", function (e) {
    for (i = 0; i < answerBtns.length; i++) {
        answerBtns[i].classList.add("hide");
    }
    if (titleEl.textContent == "Highscores") {
        return;
    }
    else {
        for (var i = 0; i < highScores.length; i++) {
            var div = document.createElement("div");
            div.setAttribute("class", "score-div");
            div.textContent = highScores[i].name + " : " + highScores[i].total;
            newScoreEl.appendChild(div);
        }
        backBtn.classList.remove("hide");
        clearBtn.classList.remove("hide");
        notification.textContent = "";
        titleEl.textContent = "Highscores";
        pEl.classList.add("hide");
        startBtn.classList.add("hide");
        label.classList.add("hide");
        inputEl.classList.add("hide");
        submitBtn.classList.add("hide");
    }
})