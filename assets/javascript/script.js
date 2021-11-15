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



// } else if (timeLeft < 5) {
//     timeLeft = 0;
//     console.log("Less than 5");
// } else if (timeLeft < 0) {
//     clearInterval()
// if (timeLeft < 5) {
//     timeLeft = 0;
//     console.log(timeLeft);
// }

resetButton.addEventListener("click", function(){
    clearInterval(intervalID);
// Clears the interval on click
    timeLeft = 30;
// Sets time left back to max on click
    displayTimer.textContent = timeLeft;
})