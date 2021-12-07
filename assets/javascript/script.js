const leaderBoard = document.querySelector("#leaderboard");
let leaderBoardString = "";
const highScoresArray = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScoresArray);

// Scorekeeping and updating

let scoreObject = {
  scoreList0: document.createElement("li"),
  scoreList1: document.createElement("li"),
  scoreList2: document.createElement("li"),
}


function clearScore() {
  scoreObject.scoreList0.textContent = "";
  scoreObject.scoreList1.textContent = "";
  scoreObject.scoreList2.textContent = "";
}

function keepingScore() {
  clearScore();

  for (let i = 0; i < highScoresArray.length; i++) {
    if (highScoresArray[i] !== undefined) {
      leaderBoard.appendChild(scoreObject["scoreList" + i]);
      scoreObject["scoreList" + i].textContent =
        highScoresArray[i].initials.toUpperCase() +
        ": " +
        highScoresArray[i].score;
    }
  }



//   if (highScoresArray[0] !== undefined) {
//     leaderBoard.appendChild(scoreList0);
//     scoreList0.textContent =
//       highScoresArray[0].initials.toUpperCase() +
//       ": " +
//       highScoresArray[0].score;
//   }
//   if (highScoresArray[1] !== undefined) {
//     leaderBoard.appendChild(scoreList1);
//     scoreList1.textContent =
//       highScoresArray[1].initials.toUpperCase() +
//       ": " +
//       highScoresArray[1].score;
//   }
//   if (highScoresArray[2] !== undefined) {
//     leaderBoard.appendChild(scoreList2);
//     scoreList2.textContent =
//       highScoresArray[2].initials.toUpperCase() +
//       ": " +
//       highScoresArray[2].score;
//   }
};

keepingScore();


// Timer Logic
let timeLeft = 30;

// Timer starts at 30
let startButton = document.querySelector("#start-button");
let resetButton = document.querySelector("#reset-button");
let wrongButton = document.querySelector("#wrong-button");

// Sets startButton variable in html as ID of start-button
let intervalID;
let displayTimer = document.querySelector("#timer-count");

// Score variables
let userScore = 0;
let highScoreEl = document.querySelector("#high-score");
let scoreKeeper = document.querySelector("#score-keeper");
let scorePage = document.querySelector("#score-page");
let submitButton = document.querySelector("#submit-button");

// Question/Answer variables
let currentQuestion = 0;
let questionText = document.querySelector("#question");
let answerText0 = document.querySelector("#answer1");
let answerText1 = document.querySelector("#answer2");
let answerText2 = document.querySelector("#answer3");
let answerText3 = document.querySelector("#answer4");

// Items to start hidden
questionText.setAttribute("style", "visibility: hidden");
answerText0.setAttribute("style", "visibility: hidden");
answerText1.setAttribute("style", "visibility: hidden");
answerText2.setAttribute("style", "visibility: hidden");
answerText3.setAttribute("style", "visibility: hidden");
scoreKeeper.setAttribute("style", "visibility: hidden");
scorePage.setAttribute("style", "display: none");

startButton.addEventListener("click", function () {
  clearInterval(intervalID);
  // Clears the interval on click
  timeLeft = 30;
  // Sets time left back to max on click
  startTimer();
  // Calls the startTimer function
  questionText.setAttribute("style", "visibility: visible");
  answerText0.setAttribute("style", "visibility: visible");
  answerText1.setAttribute("style", "visibility: visible");
  answerText2.setAttribute("style", "visibility: visible");
  answerText3.setAttribute("style", "visibility: visible");
  scoreKeeper.setAttribute("style", "visibility: visible");
  startButton.setAttribute("style", "display: none");
});

function beginQuiz() {
  // Populates questions, answers, and score.
  currentQuestion = 0;
  // Ensures quiz always begins on question [0].
  userScore = 0;

  questionText.textContent = questionArray[currentQuestion].question;
  answerText0.textContent = questionArray[currentQuestion].answers[0];
  answerText1.textContent = questionArray[currentQuestion].answers[1];
  answerText2.textContent = questionArray[currentQuestion].answers[2];
  answerText3.textContent = questionArray[currentQuestion].answers[3];
  scoreKeeper.textContent = `Current score is ${userScore}`;
  // Populates the text content with questions and answers based on currentQuestion

  console.log("Quiz started");
  console.log("Current score is " + userScore);
}

function startTimer() {
  // Starts interval timer
  intervalID = setInterval(function () {
    // Sets intervalID variable as the interval function
    --timeLeft;
    console.log(timeLeft);
    // Decrements timeLeft by 1 each pass
    displayTimer.textContent = timeLeft;
    // Uses the value of timeLeft as the displayed text content in displayTimer
    if (timeLeft === 0) {
      console.log("Time's up!");
      displayTimer.textContent = "Out of time!";
      clearInterval(intervalID);
      // Displays "Out of time!" string to the text content of displayTimer when timeLeft reaches 0
      // Clears the interval when timeLeft reaches 0
      clearQuiz();
      enterScore();
    }
  }, 1000);
  beginQuiz();
}

// Placeholder wrong button
// wrongButton.addEventListener("click", function () {
//     oops();
// });

// Time decrement on wrong answer
function oops() {
  if (timeLeft >= 5) {
    timeLeft -= 5;
    console.log("Minus 5 seconds.");
  } else if (timeLeft < 5) {
    console.log("Time's up!");
    displayTimer.textContent = "Out of time!";
    clearInterval(intervalID);
  }
}

function clearQuiz() {
  questionText.setAttribute("style", "visibility: hidden");
  answerText0.setAttribute("style", "visibility: hidden");
  answerText1.setAttribute("style", "visibility: hidden");
  answerText2.setAttribute("style", "visibility: hidden");
  answerText3.setAttribute("style", "visibility: hidden");
  console.log("Quiz Cleared");
}

resetButton.addEventListener("click", function () {
  clearInterval(intervalID);
  // Clears the interval on click
  timeLeft = 30;
  // Sets time left back to max on click
  displayTimer.textContent = timeLeft;
  userScore = 0;
  console.log("Quiz reset. Score reset to 0.");
  clearQuiz();
  startButton.setAttribute("style", "visibility: visible");
  scoreKeeper.setAttribute("style", "display: none");
  scorePage.setAttribute("style", "display: none");
});

function nextQuestion() {
  console.log(currentQuestion + " is the current question");
  if (currentQuestion < 4) {
    questionText.textContent = questionArray[currentQuestion].question;
    answerText0.textContent = questionArray[currentQuestion].answers[0];
    answerText1.textContent = questionArray[currentQuestion].answers[1];
    answerText2.textContent = questionArray[currentQuestion].answers[2];
    answerText3.textContent = questionArray[currentQuestion].answers[3];
    scoreKeeper.textContent = `Current score is ${userScore}`;
  } else {
    console.log("End of questions");
    clearQuiz();
    clearInterval(intervalID);
    scoreKeeper.textContent = `Final score is ${userScore}`;
    console.log("Enter user score:");
    enterScore();
  }
}

function enterScore() {
  scoreKeeper.textContent = `Final score is ${userScore}`;
  startButton.setAttribute("style", "display: none");
  scorePage.setAttribute("style", "visibility: visible");
}

let scoreForm = document.querySelector("#score-form");
scoreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let initialsInput = document.querySelector("#initials-input");

  console.log(highScoresArray);

  const highScore = {
    initials: initialsInput.value,
    score: userScore,
  };

  console.log(highScoresArray);
  highScoresArray.push(highScore);
  highScoresArray.sort((a, b) => b.score - a.score);
  if (highScoresArray.length > 3) {
    highScoresArray.pop();
  }
  console.log(highScoresArray);

  localStorage.setItem("highScores", JSON.stringify(highScoresArray));

  gameOver();
});

function gameOver() {
  clearInterval(intervalID);
  // Clears the interval on click
  timeLeft = 30;
  // Sets time left back to max on click
  displayTimer.textContent = timeLeft;
  userScore = 0;
  console.log("Quiz reset. Score reset to 0.");
  clearQuiz();
  startButton.setAttribute("style", "visibility: visible");
  scoreKeeper.setAttribute("style", "display: none");
  scorePage.setAttribute("style", "display: none");
  keepingScore();
}

answerText0.addEventListener("click", function () {
  if (
    answerText0.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    console.log("Correct. +1 score.");
    ++userScore;
    console.log("Current score is " + userScore);
    ++currentQuestion;
    nextQuestion();
  } else {
    console.log("Incorrect. No score added.");
    oops();
    ++currentQuestion;
    console.log("Current score is " + userScore);
    nextQuestion();
  }
});

//TODO: event.target refactor

answerText1.addEventListener("click", function () {
  if (
    answerText1.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    console.log("Correct. +1 score.");
    ++userScore;
    console.log("Current score is " + userScore);
    ++currentQuestion;
    nextQuestion();
  } else {
    console.log("Incorrect. No score added.");
    oops();
    ++currentQuestion;
    console.log("Current score is " + userScore);
    nextQuestion();
  }
});

answerText2.addEventListener("click", function () {
  if (
    answerText2.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    console.log("Correct. +1 score.");
    ++userScore;
    console.log("Current score is " + userScore);
    ++currentQuestion;
    nextQuestion();
  } else {
    console.log("Incorrect. No score added.");
    oops();
    ++currentQuestion;
    console.log("Current score is " + userScore);
    nextQuestion();
  }
});

answerText3.addEventListener("click", function () {
  if (
    answerText3.textContent === questionArray[currentQuestion].correctAnswer
  ) {
    console.log("Correct. +1 score.");
    ++userScore;
    console.log("Current score is " + userScore);
    ++currentQuestion;
    nextQuestion();
  } else {
    console.log("Incorrect. No score added.");
    oops();
    ++currentQuestion;
    console.log("Current score is " + userScore);
    nextQuestion();
  }
});

let questionArray = [
  {
    question: "What color is the sky?",
    answers: ["Blue", "Red", "Green", "Purple"],
    correctAnswer: "Blue",
  },
  {
    question: "The earth is the ____ planet from the sun.",
    answers: ["first", "second", "third", "fourth"],
    correctAnswer: "third",
  },
  {
    question: "How much was the tuition for this course?",
    answers: [
      "Tree fiddy",
      "Five finger discount",
      "Thirteen grand and some change",
      "You paid for this?",
    ],
    correctAnswer: "Thirteen grand and some change",
  },
  {
    question: "Are you in my swamp?",
    answers: ["No", "Yes", "Up", "Down"],
    correctAnswer: "Yes",
  },
];