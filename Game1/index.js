var groupSprites
var player
var GROUND_SPRITE_WIDTH = 50
var GROUND_SPRITE_HEIGHT = 50
var numGroundSprites
var grav = 0.3
var jmp = -5
var obstacleSprites
var isGameOver
var score = 0



function setup() {
  isGameOver = false
  player = createSprite(100, height-75, 50, 50)
  obstacleSprites = new Group()
  createCanvas(400, 300)
  background(150, 200, 250)
  groundSprites = new Group()
  

  numGroundSprites = width / GROUND_SPRITE_WIDTH +1
  for (var n = 0; n < numGroundSprites; n++) {
    var sprite = createSprite(
      n * 50,
      height - 25,
      GROUND_SPRITE_WIDTH,
      GROUND_SPRITE_HEIGHT
    )
    groundSprites.add(sprite)
  }
}
function draw() {
  
  if (isGameOver){
    textAlign(CENTER)
    background(0)
    fill(255)
    text('Your score was: ' + score, camera.position.x, camera.position.y - 20)
    text(
      'Game Over',
      camera.position.x,
      camera.position.y,
    )
  } else {
    background(150, 200, 250)
    player.velocity.y = player.velocity.y + grav

    if (groundSprites.overlap(player)){
      player.velocity.y = -player.velocity.y/4
      player.position.y = height - 50 - player.height / 2
    }

    obstacleSprites.overlap(player, endgame)

    if (keyDown(UP_ARROW)) {
      player.velocity.y = jmp
    }

    player.position.x = player.position.x+5
    camera.position.x = player.position.x

    var firstGroundSprite = groundSprites[0]

    if(firstGroundSprite.position.x <= camera.position.x - (width / 2 + firstGroundSprite.width / 2)){
      groundSprites.remove(firstGroundSprite)
      firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites * firstGroundSprite.width
      groundSprites.add(firstGroundSprite)
    }

    if(random() > 0.98){
      var obstacle = createSprite(camera.position.x + width, random(0, height - 50 - 15) , 30, 30)
      obstacleSprites.add(obstacle)
    }
    var firstObstacle = obstacleSprites[0]

    if (obstacleSprites.length > 0 && firstObstacle.position.x <= camera.position.x - (width / 2 + firstObstacle.width / 2)) {
      removeSprite(firstObstacle)
    }
  
    
    drawSprites()  
    score++
    textAlign(CENTER)
    text(score, camera.position.x, 10)
  }
}

function endgame (){
  isGameOver = true
  console.log('Game Over!')
}
function mouseClicked() {
  if (isGameOver) {
    for (var n = 0; n < numGroundSprites; n++) {
      var groundSprite = groundSprites[n]
      groundSprite.position.x = n * 50
    }
    score = 0
    player.position.x = 100
    player.position.y = height - 75

    obstacleSprites.removeSprites()

    isGameOver = false
  }
}