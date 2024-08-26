// Delayed Message Display
function displayHelloWorld() {
    setTimeout(() => {
        console.log("Hello, World!");
    }, 3000); 
}
displayHelloWorld();

// Time Logger
function logTime() {
    const intervalId = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        console.log(currentTime);
    }, 2000); 

    setTimeout(() => {
        clearInterval(intervalId); 
    }, 10000); 
}
logTime();

// Delayed Sum Calculation
function logSum(num1, num2) {
    setTimeout(function() {
        const sum = num1 + num2;
        console.log("The sum is:", sum);
    }, 2000);
}

logSum(5, 10);

// Countdown Timer
function countdownTimer(start) {
    let current = start;

    const intervalId = setInterval(() => {
        console.log(current);
        if (current === 0) {
            clearInterval(intervalId); // Stop the timer
            setTimeout(() => {
                console.log("Time's up!");
            }, 1000); // 1-second delay after reaching 0
        } else {
            current--;
        }
    }, 1000); // 1-second interval
}

// Start the countdown from 5
countdownTimer(5);

// Delayed Multiplication
function mul(a, b) {
    setTimeout(function() {
        const total = a * b;
        console.log("The total is:", total);
    }, 2000);
}

mul(5, 10);
