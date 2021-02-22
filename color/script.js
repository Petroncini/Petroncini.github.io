const speech = new p5.SpeechRec('en-US', parseResult)
speech.continuous = true
speech.interimResults = false

var sheep = new RGBColour(0,255,0)
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  fill(25)

  textSize(48)
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('"Avenir Next", system-ui, sans-serif')
  text('SAY A COLOR', width / 2, height / 2)
  speech.start()
}

function draw() {
  // Where we’re going we don’t need drawing
}
var previouscolor = "white";
function parseResult() {
  if (speech.resultValue) {
    const color = speech.resultString.replace(/\s+/g, '').toUpperCase()
    background(color)
    text(color, width / 2, height / 2)
    console.log(color)
  }
}