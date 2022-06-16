// Quiz questions
let questions = [{
    "question": "In which World Cup did Diego Maradona score his infamous 'Hand of God' goal?",
    "optionA": "Spain 1982",
    "optionB": "Italy 1990",
    "optionC": "Mexico 1986",
    "optionD": "Argentina 1978",
    "correct": "C"
  },
  {
    "question": "In which season was the European Cup rebranded as the Champions League? ",
    "optionA": "96-97",
    "optionB": "91-92",
    "optionC": "93-94",
    "optionD": "92-93",
    "correct": "D"
  },
  {
    "question": "FC Cologne have which animal on their club crest? ",
    "optionA": "Two Lions",
    "optionB": "A Fox",
    "optionC": "A Goat",
    "optionD": "A Bird",
    "correct": "C"
  },
  {
    "question": "Where did Milan sign Weah from?",
    "optionA": "PSG",
    "optionB": "Monaco",
    "optionC": "Marseille",
    "optionD": "Bordeaux",
    "correct": "A"
  },
  {
    "question": "Which Dutch player became known as the Non-Flying Dutchman?",
    "optionA": "Robin van Persie",
    "optionB": "Dennis Bergkamp",
    "optionC": "Justin Kluivert",
    "optionD": "Arjen Robben",
    "correct": "B"
  },
  {
    "question": "Who was the first sponsor of the Premier League?",
    "optionA": "EA Sports",
    "optionB": "Barclaycard",
    "optionC": "Budweiser",
    "optionD": "Carling",
    "correct": "D"
  },
  {
    "question": "In which year Ronaldo retired before changing his decision?",
    "optionA": "1997",
    "optionB": "1996",
    "optionC": "1994",
    "optionD": "1998",
    "correct": "B"
  },
  {
    "question": "Who won Player of the Tournament in Football Euro Cup 2020?",
    "optionA": "Pedri",
    "optionB": "Jorginho",
    "optionC": "G.Donnarumma",
    "optionD": "R.Sterling",
    "correct": "C"
  },
  {
    "question": "Which player holds the record for most Champions League winners' medals?",
    "optionA": "Cristiano Ronaldo",
    "optionB": "Francisco Gento",
    "optionC": "Clarence Seedorf",
    "optionD": "Paolo Maldini",
    "correct": "B"
  },
 {
    "question": "In 1990, which team failed to score even one goal in the World Cup final?",
    "optionA": "Argentina",
    "optionB": "Egypt",
    "optionC": "Costa Rica",
    "optionD": "South Korea",
    "correct": "A"
  },
  {
    "question": "Who was the best player ever in Partizani Tirana's history?",
    "optionA": "Igli Tare",
    "optionB": "Panajot Pano",
    "optionC": "Refik Resmja",
    "optionD": "Elton Nikolla",
    "correct": "D"
  }
];

// select all elements
let header = document.getElementById("header");
let welcome = document.getElementById("welcome");
let start = document.getElementById("startQuiz");
let question = document.getElementById("question");
let quizContainer = document.getElementById("quizContainer");
let optionA = document.getElementById("A");
let optionB = document.getElementById("B");
let optionC = document.getElementById("C");
let optionD = document.getElementById("D");
let button = document.getElementsByClassName("btn");
let scoreSection = document.getElementById("scoreSection");
let resultMessage = document.getElementById("resultMessage");
let timer = document.getElementById("timer");
let result = document.getElementById("result");

// create some variables
let lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;
// interval time
var holdInterval = 0;
var secondsLeft = 90;


start.addEventListener("click", startQuiz);


function startQuiz() {

    quizContainer.classList.remove("hide");
    welcome.classList.add("hide");
    displayQuestion();
    startTimer();
}

function displayQuestion() {

    let q = questions[runningQuestion];

    question.innerText = q.question;
    optionA.innerText = q.optionA;
    optionB.innerText = q.optionB;
    optionC.innerText = q.optionC;
    optionD.innerText = q.optionD;
}

function checkAnswer(answer) {

    if (answer == questions[runningQuestion].correct) {
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
        count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        displayQuestion();
    } else {
        gameOver();
    }
}

function startTimer() {

    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            secondsLeft--;
            timer.textContent = `Time left: ${secondsLeft} seconds`;

    if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        gameOver();
        timer.textContent = "OOOPS! TIME'S UP!";
    }
        }, 1000);
    }
}

function answerIsCorrect() {

    score = score + 10;
}

function answerIsWrong() {

    score = score + 0;
    secondsLeft = secondsLeft - 10;
}

function gameOver() {

    header.classList.remove("hide");
    scoreSection.classList.remove("hide");
    quizContainer.classList.add("hide");
    result.textContent = `You scored: ${score}/110`;
    button.disabled = true;
    if (score <= 50) {
    resultMessage.innerHTML = `Well done! <br>You're trying to know this GAME! <br><br> Press the Home button to give it another shot!`;
    } else if (score > 50 && score <= 90) {
    resultMessage.innerHTML = `Going the right way. <br>Enjoy this beautiful GAME! <br><br>Press the Home button to give it another shot!`;
    } else if (score > 90 && score <= 110) {
    resultMessage.innerHTML = `A man takes his seat at the World Cup Final.<br>
    He looks to his left and notices that there is a spare seat between himself and the next guy.
    <br>The man: “Who would ever miss the World Cup final?”
    <br>The guy: “That was my wife’s seat. We have been to the last five World Cup finals together, but sadly she passed away.”
    <br>The man: “That’s terrible, but couldn’t you get another member of the family, friend, or someone else to come with you?”
    <br>The guy: “No…they are all at the funeral!” <br><br>Don't be that guy :)))`;
}
}