// Time Logic
let timeLeft = 30;
// Timer starts at 30
let startButton = document.querySelector('#start-button');
let resetButton = document.querySelector('#reset-button');
let wrongButton = document.querySelector('#wrong-button');
// Sets startButton variable in html as ID of start-button.
let intervalID;
let displayTimer = document.querySelector("#timer-count");



startButton.addEventListener("click", function(){
    clearInterval(intervalID);
    // Clears the interval on click
    timeLeft = 30;
    // Sets time left back to max on click
    startTimer();
    // Calls the startTimer function
})



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



wrongButton.addEventListener("click", function(){
    if (timeLeft >= 5) {
        timeLeft -= 5;
        console.log("Minus 5");
    } else if (timeLeft < 5) {
        console.log("Time's up!");
        displayTimer.textContent = "Out of time!";
        clearInterval(intervalID);
    }
})



resetButton.addEventListener("click", function(){
    clearInterval(intervalID);
    // Clears the interval on click
    timeLeft = 30;
    // Sets time left back to max on click
    displayTimer.textContent = timeLeft;
    // Clears quiz question and buttons.
    // questionText.textContent = "";
    // answerText0.textContent = "";
    // answerText1.textContent = "";
    // answerText2.textContent = "";
    // answerText3.textContent = "";
    // questionText.setAttribute("display: none");
    // answerText0.setAttribute("display: none");
    // answerText1.setAttribute("display: none");
    // answerText2.setAttribute("display: none");
    // answerText3.setAttribute("display: none");
})



let currentQuestion = 0;
let questionText = document.querySelector("#question");
let answerText0 = document.querySelector("#answer1");
let answerText1 = document.querySelector("#answer2");
let answerText2 = document.querySelector("#answer3");
let answerText3 = document.querySelector("#answer4");



function beginQuiz() {
    questionText.textContent = questionArray[currentQuestion].question;
    answerText0.textContent = questionArray[currentQuestion].answers[0];
    answerText1.textContent = questionArray[currentQuestion].answers[1];
    answerText2.textContent = questionArray[currentQuestion].answers[2];
    answerText3.textContent = questionArray[currentQuestion].answers[3];
    console.log("Quiz started");
}

function nextQuestion() {
    questionText.textContent = questionArray[currentQuestion].question;
    answerText0.textContent = questionArray[currentQuestion].answers[0];
    answerText1.textContent = questionArray[currentQuestion].answers[1];
    answerText2.textContent = questionArray[currentQuestion].answers[2];
    answerText3.textContent = questionArray[currentQuestion].answers[3];   
}

let userScore = 0;

answerText0.addEventListener("click", function(){
    if (answerText0.textContent === questionArray[currentQuestion].correctAnswer) {
        console.log("Correct. +1 score.");
        ++userScore;
        console.log("Current score is " + userScore)
        ++currentQuestion;
        nextQuestion();
    } else {
        console.log("Incorrect. No score added.");
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
        // ++currentQuestion;
        // nextQuestion();
    } else {
        console.log("Incorrect. No score added.");
        // ++currentQuestion;
        console.log("Current score is " + userScore)
        // nextQuestion();
    }
    quizComplete();
})



// for (let i = 0; i < question.length; i++) {
//     console.log(question.length);
//     currentQuestion = question[i];
//     console.log(currentQuestion);
    
    // for (let ans = 0; ans < currentQuestion.length; ans++) {
    //     const answer = currentQuestion[ans];
    //     console.log(answer);
    // }

// answerText2.addEventListener("click", nextQuestion());
// answerText3.addEventListener("click", nextQuestion());
// answerText4.addEventListener("click", nextQuestion());

// nextQuestion() {
    //     deeznuts = 00;
    // };


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
        answers: ["No", "Yes"],
        correctAnswer: "Yes"
    }
];

// for (let i = 0; i < questions.length; i++) {
//     const element = questions[i];
    
//     questions[i].answers


//     for (let j = 0; j < quetions[j].answers.length; j++) {
//         const element = quetions[j].answers[j];
        
//     }
    
// }

// increment current question from 1 q to another, loop over answers, display in proper buttons

// document.querySelector("answer1").dataset.value = questions[currentQuestion].answers[0];
