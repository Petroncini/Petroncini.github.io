let ftt

function perc2color(perc) {
	var r, g, b = 0;
	if(perc < 50) {
		r = 255;
		g = Math.round(5.1 * perc);
	}
	else {
		g = 255;
		r = Math.round(510 - 5.10 * perc);
	}
	var h = r * 0x10000 + g * 0x100 + b * 0x1;
	return '#' + ('000000' + h.toString(16)).slice(-6);
}

let Particle = function (position) {
    this.position = position
    this.speed = createVector(0, 1)
    this.color = [random(0, 255), random(0, 255), random(0, 255)]
  
    this.draw = function () {
      circle(this.position.x, this.position.y, this.diameter)
      fill(this.color)
    }
    this.update = function (energy) {
      this.diameter = random(5, 7) + energy * 50
      this.position.y += 1 
      this.position.y += (this.speed.y * energy * 10 ) 
      this.color = perc2color(energy * 500)
      if (this.position.y > height) {
        this.position.y = 0
      }
    }
}


  function setup() {
    createCanvas(windowWidth, windowHeight)
    noStroke()
  
    let mic = new p5.AudioIn()
    mic.start()
  
    fft = new p5.FFT()
    fft.setInput(mic)
  
    positionParticles()
  }
function draw(){
    background(0, 0, 0)
    let spectrum = fft.analyze()
    updateParticles(spectrum)
}
