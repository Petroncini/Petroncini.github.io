let bubs = [];
//var sound;

function setup() {
  createCanvas(1000, 1000);
  //for(let i = 0; i<50; i++){
   // bubs.push(new Bubble())
  //}
  
 
}

var popmode = false;
var dragmode = false;

function draw() {
  background(0);
  for(let i = 0; i<bubs.length; i++){
    bubs[i].move();
    bubs[i].show();
  }

}

function keyTyped(){
  if (key === "p"){
    popmode = !popmode;
    print("popmode: " + popmode)
    print("dragmode: " + dragmode)
  }
  if (key === "d"){
    dragmode = !dragmode;
    print("popmode: " + popmode)
    print("dragmode: " + dragmode)
  }
}

/*
function mouseDragged(){
  if(!popmode){
    bubs.push(new Bubble())
  }
}
*/
function mouseClicked(){
  if(!dragmode){
    if(!popmode){
      bubs.push(new Bubble())
    } else{
  
      for(let i = 0; i<bubs.length; i++){
  
        if (dist(bubs[i].x,bubs[i].y, mouseX, mouseY) < (bubs[i].size/2)){
          bubs[i].popping = true;
          //bubs.splice(i,1)
          print("HIT!")
        }
      }
    } 
  } 
}

function mouseDragged(){
  if(dragmode){
    if(!popmode){
      bubs.push(new Bubble())
    } else{
  
      for(let i = 0; i<bubs.length; i++){
  
        if (dist(bubs[i].x,bubs[i].y, mouseX, mouseY) < (bubs[i].size/2)){
          bubs[i].popping = true;
          //bubs.splice(i,1)
          print("HIT!")
        }
      }
    } 
  } 
}


class Bubble {
  
  constructor(){
    this.x = mouseX;
    this.y = mouseY;
    this.size = random(5,30)
    this.R = random(0,255);
    this.G = random(0,255);
    this.B = random(0,255);
    this.index = bubs.length-1;
    this.popping = false;
    this.grow=0;
  }
  
  move(){
    if(this.grow<150){
      this.x += random(-5,5);
      this.y += random(-5,5);
    }
    
  }
  show(){
    if (this.grow < 150){
      stroke(this.R,this.G,this.B);
      strokeWeight(2);
      noFill();
      ellipse(this.x,this.y,this.size+this.grow,this.size+this.grow)
      if(this.popping==true){
        this.grow += 15
      } 
    } 
  }

 
}