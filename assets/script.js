var timer;
var countdown;
var timerEl = document.querySelector(".timer");
// started the timer when the game is started
function startTimer(){
    console.log("timer works");
    timer = setInterval(function(){
        countdown--;
        timerEl.textContent = countdown;
    }, 1000);

}
startTimer();