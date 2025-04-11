
let seconds = 30; 

function updateCountdown() {
    const countdownElement = document.getElementById("seconds");

    if (seconds > 0) {
        seconds--;
        countdownElement.textContent = seconds;
    } else {
        countdownElement.textContent = "00"; 
    }
}

setInterval(updateCountdown, 1000);
