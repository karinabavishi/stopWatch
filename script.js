// Variables to store timer state and time
let timer; // Variable to hold the interval ID
let isRunning = false; // Flag to indicate if the timer is running
let seconds = 0; // Seconds counter
let minutes = 0; // Minutes counter
let hours = 0; // Hours counter

// DOM elements
const display = document.querySelector('.display'); // Element to display the timer
const startBtn = document.querySelector('#start'); // Start button
const stopBtn = document.querySelector('#stop'); // Stop button
const resetBtn = document.querySelector('#reset'); // Reset button

// Function to start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true; // Update timer state
        timer = setInterval(updateTimer, 1000); // Start the interval timer
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timer); // Stop the interval timer
    isRunning = false; // Update timer state
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer); // Stop the interval timer
    isRunning = false; // Update timer state
    seconds = 0; // Reset seconds
    minutes = 0; // Reset minutes
    hours = 0; // Reset hours
    display.textContent = '00:00:00'; // Reset display
}

// Function to update the timer display
function updateTimer() {
    seconds++; // Increment seconds
    if (seconds === 60) {
        seconds = 0;
        minutes++; // Increment minutes if seconds reach 60
    }
    if (minutes === 60) {
        minutes = 0;
        hours++; // Increment hours if minutes reach 60
    }
    // Update the display with the current time
    display.textContent = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Event listeners for buttons
startBtn.addEventListener('click', startTimer); // Start button
stopBtn.addEventListener('click', stopTimer); // Stop button
resetBtn.addEventListener('click', resetTimer); // Reset button
