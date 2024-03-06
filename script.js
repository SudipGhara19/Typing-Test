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
const resultElement = document.getElementById("result");
const speedEl = document.getElementById("speed");
const accuracyEl = document.getElementById("accuracy");
const retryEl = document.getElementById("retry-btn");

let timer;
let seconds = 30;

startBtn.addEventListener('click', () => {
    sentenceEl.textContent = `${sentences}`;
    inputFeild.disabled = false;
    inputFeild.focus();
    timerEl.textContent = `Time Left: ${seconds}`;
    startTimer();
    startBtn.disabled = true;
});

retryEl.addEventListener('click', () => {
    retryTest();
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


function showResult(){
    resultElement.style.display = 'contents';
    inputFeild.disabled = true;

    //calculate and display the typing speed
    const typedWords = inputFeild.value.trim().split(/\s+/).filter(word => word !== "").length;
    const wpm = Math.round((typedWords / 30) * 60);
    speedEl.textContent = `${wpm}`;

    //calculate and show the accuracy
    const correctCharacters = inputFeild.value.split('').filter((char, index) => char === sentences[index]).length;
    const accuracy = Math.round((correctCharacters / sentences.length) * 1000);
    accuracyEl.textContent = `${accuracy}`;


}

function retryTest(){
    inputFeild.value = '';
    inputFeild.disabled = true;
    startBtn.disabled = false;
    resultElement.style.display = 'none';
    seconds = 30;
}

function endGame(){
    clearInterval(timer);
    timerEl.textContent = '';
    showResult();
}

