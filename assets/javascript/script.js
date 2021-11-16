// Time Logic
let timeLeft = 30;
// Timer starts at 30
let startButton = document.querySelector('#start-button');
let resetButton = document.querySelector('#reset-button');
let wrongButton = document.querySelector('#wrong-button');
// Sets startButton variable in html as ID of start-button.
let intervalID;
let displayTimer = document.querySelector("#timer-count");
// Sets user score to 0
let userScore = 0;

let currentQuestion = 0;
let questionText = document.querySelector("#question");
let answerText0 = document.querySelector("#answer1");
let answerText1 = document.querySelector("#answer2");
let answerText2 = document.querySelector("#answer3");
let answerText3 = document.querySelector("#answer4");
let scoreKeeper = document.querySelector("#score-keeper");
let quizButton = document.querySelectorAll(".quiz-button");

startButton.addEventListener("click", function(){
    clearInterval(intervalID);
    // Clears the interval on click
    timeLeft = 30;
    // Sets time left back to max on click
    startTimer();
    // Calls the startTimer function
    questionText.setAttribute("display", "inline");
    answerText0.setAttribute("display", "inline");
    answerText1.setAttribute("display", "inline");
    answerText2.setAttribute("display", "inline");
    answerText3.setAttribute("display", "inline");
    scoreKeeper.setAttribute("display", "inline");
})

function beginQuiz() {
    // Populates questions, answers, and score.
    currentQuestion=0;
    questionText.textContent = questionArray[currentQuestion].question;
    answerText0.textContent = questionArray[currentQuestion].answers[0];
    answerText1.textContent = questionArray[currentQuestion].answers[1];
    answerText2.textContent = questionArray[currentQuestion].answers[2];
    answerText3.textContent = questionArray[currentQuestion].answers[3];
    scoreKeeper.textContent = `${userScore}`;
    console.log("Quiz started");
    console.log("Current score is " + userScore);
}

function startTimer(){
    // Starts interval timer
    intervalID = setInterval(function(){
        // Sets intervalID variable as the interval function
        --timeLeft;
        console.log(timeLeft);
        // Decrements timeLeft by 1 each pass
        displayTimer.textContent = timeLeft;
        // Uses the value of timeLeft as the displayed text content in displayTimer
        if(timeLeft === 0){
            console.log("Time's up!");
            displayTimer.textContent = "Out of time!";
            clearInterval(intervalID);
            // Displays "Out of time!" string to the text content of displayTimer when timeLeft reaches 0
            // Clears the interval when timeLeft reaches 0
        }
        
    }, 1000)
    beginQuiz();
}

// Placeholder wrong button
wrongButton.addEventListener("click", function () {
    oops();    
});

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
    scoreKeeper.setAttribute("style", "visibility: hidden");
    console.log("Quiz Cleared")
}

resetButton.addEventListener("click", function(){
    clearInterval(intervalID);
    // Clears the interval on click
    timeLeft = 30;
    // Sets time left back to max on click
    displayTimer.textContent = timeLeft;
    userScore = 0;
    console.log("Quiz reset. Score reset to 0.")
    clearQuiz();
})

function nextQuestion() {
    console.log(currentQuestion, "WHAT IS THIS =========???")
    if (currentQuestion < 4) {
        questionText.textContent = questionArray[currentQuestion].question;
        answerText0.textContent = questionArray[currentQuestion].answers[0];
        answerText1.textContent = questionArray[currentQuestion].answers[1];
        answerText2.textContent = questionArray[currentQuestion].answers[2];
        answerText3.textContent = questionArray[currentQuestion].answers[3];   
    } else {
        console.log("End of questions");
        clearQuiz();
        clearInterval(intervalID);
}}


answerText0.addEventListener("click", function(){
    if (answerText0.textContent === questionArray[currentQuestion].correctAnswer) {
        console.log("Correct. +1 score.");
        ++userScore;
        console.log("Current score is " + userScore)
        ++currentQuestion;
        nextQuestion();
    } else {
        console.log("Incorrect. No score added.");
        oops();
        ++currentQuestion;
        console.log("Current score is " + userScore)
        nextQuestion();
    }
})

answerText1.addEventListener("click", function(){
     if (answerText1.textContent === questionArray[currentQuestion].correctAnswer) {
        console.log("Correct. +1 score.");
        ++userScore;
        console.log("Current score is " + userScore)
        ++currentQuestion;
        nextQuestion();
    } else {
        console.log("Incorrect. No score added.");
        oops();
        ++currentQuestion;
        console.log("Current score is " + userScore)
        nextQuestion();
    }
})

answerText2.addEventListener("click", function(){
    if (answerText2.textContent === questionArray[currentQuestion].correctAnswer) {
        console.log("Correct. +1 score.");
        ++userScore;
        console.log("Current score is " + userScore)
        ++currentQuestion;
        nextQuestion();
    } else {
        console.log("Incorrect. No score added.");
        oops();
        ++currentQuestion;
        console.log("Current score is " + userScore)
        nextQuestion();
    }
})

answerText3.addEventListener("click", function(){
    if (answerText3.textContent === questionArray[currentQuestion].correctAnswer) {
        console.log("Correct. +1 score.");
        ++userScore;
        console.log("Current score is " + userScore)
        ++currentQuestion;
        nextQuestion();
    } else {
        console.log("Incorrect. No score added.");
        oops();
        ++currentQuestion;
        console.log("Current score is " + userScore)
        nextQuestion();
    }
})

let questionArray = [
    {
        question: "What color is the sky?",
        answers: ["Blue", "Red", "Green", "Purple"],
        correctAnswer: "Blue"
    },
    {
        question: "The earth is the ____ planet from the sun.",
        answers: ["first", "second", "third", "fourth"],
        correctAnswer: "third"
    },
    {
        question: "How much was the tuition for this course?",
        answers: ["Tree fiddy", "Five finger discount", "Thirteen grand and some change", "You paid for this?"],
        correctAnswer: "Thirteen grand and some change"
    },
    {
        question: "Is this the final quiz question?",
        answers: ["No", "Yes", "Up", "Down"],
        correctAnswer: "Yes"
    },
];
