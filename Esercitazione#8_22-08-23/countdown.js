let countdown;
let remainingTime = 0;

function startCountdown() {
    const displayElement = document.getElementById("display");
    if (countdown) {
        clearInterval(countdown);
    }
    if (remainingTime <= 0) {
        remainingTime = parseInt(document.getElementById("secondsInput").value) || 0;
    }
    countdown = setInterval(function () {
        if (remainingTime > 0) {
            remainingTime--;
            displayElement.textContent = remainingTime;
        } else {
            clearInterval(countdown);
            alert('Countdown terminato!');
        }
    }, 1000);
}

function pauseCountdown() {
    clearInterval(countdown);
}

function resetCountdown() {
    clearInterval(countdown);
    document.getElementById("secondsInput").value = '';
    remainingTime = 0;
    document.getElementById("display").textContent = '0';
}


/* 

|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ

*/