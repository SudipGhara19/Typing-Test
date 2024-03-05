//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
  `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
;

const sentenceEl = document.getElementById("sentence");
const startTest = document.getElementById("start-btn");

let timer;
let seconds = 60;

