let lines, markov, data1, data2, x = 160, y = 240;

function preload() {

  data1 = loadStrings('poems/all.en.txt');
  data2 = loadStrings('poems/all.en.txt');
  data3 = loadStrings('poems/all.en.txt');
  data4 = loadStrings('poems/all.en.txt');
  console.log(data1)
  // data2 = loadStrings('poems.txt');
  
}

function setup() {

  createCanvas(500, 500);
  textFont('helvetica', 16);
  textLeading(21);
  textAlign(LEFT);

  lines = ["click to (re)generate"];

  // create a markov model w' n=4
  markov = RiTa.markov(4);

  // load text into the model
  markov.addText(data1.join(' '));
  markov.addText(data2.join(' '));
  markov.addText(data3.join(' '));
  markov.addText(data4.join(' '));
    // markov.addText(data2.join(' '));

  drawText();
}

function drawText() {
  background(50, 30, 40);
  fill(220);
  text(lines.join(' '), x, y, 420, 420);
}

function mouseClicked() {
  lines = markov.generate(5);
  x = y = 40;
  drawText();
}

    


