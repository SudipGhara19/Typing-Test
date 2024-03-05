//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
  `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
;

const sentenceEl = document.getElementById("sentence");
const startBtn = document.getElementById("start-btn");
const timerEl = document.getElementById("timer");
const inputFeild = document.getElementById("input");

let timer;
let seconds = 60;

startBtn.addEventListener('click', () => {
    sentenceEl.textContent = `${sentences}`;
    inputFeild.disabled = false;
    inputFeild.focus();
    timerEl.textContent = `Time Left: ${seconds}`;
    startTimer();
})

function startTimer (){
    timer = setInterval(() => {
        seconds--;
        timerEl.textContent = `Time Left: ${seconds}`;
        if(seconds <= 0){
            endGame();
        }
    },1000)
}

function endGame(){
    clearInterval(timer);
}