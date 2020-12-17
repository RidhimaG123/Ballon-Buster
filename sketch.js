var pb, gb, bb, rb, pb1, gb1, bb1, rb1
var bg, bg1
var bow, bowImage
var arrow, arrowImage
var score=0

function preload(){
 //load your images here 
 rb1=loadImage("red_balloon0.png")
  pb1=loadImage("pink_balloon0.png")
  bb1=loadImage("blue_balloon0.png")
  gb1=loadImage("green_balloon0.png")
  bg1=loadImage("background0.png")
  bowImage=loadImage("bow0.png")
  arrowImage=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  bg=createSprite(0,0,600,600)
  bg.addImage(bg1)
  bg.scale=3
  //add code here

  
  bow = createSprite(480,220,20,50)
  bow.addImage(bowImage)
  
  arrow = createSprite(360,100,5,10)
  arrow.addImage(arrowImage)
  arrow.scale=0.4
  arrow.visible=false
  
  
  }



function draw() {
bg.velocityX=-3
  if(bg.x<0){
    bg.x=bg.width/2
  }
  
  
  bow.y=World.mouseY
  if(keyDown("space")){
    arrow.velocityX=-6
    arrow.x=bow.x
    arrow.y=bow.y
    arrow.visible=true
  }
    var rand = Math.round(random(1,4))
  if(frameCount%80===0){
    if(rand==1){
      RB()
    }
    else if(rand==2){
      GB()
    }
    else if(rand==3){
      BB()
    }
    else{
      PB()
    }
  }
  
  //add code here
  drawSprites()
  text("Score"+score,500,50)
}
function RB(){
  var rb = createSprite(0,250,10,10)
  rb.addImage(rb1)
  rb.y=Math.round(random(20,370))
  rb.velocityX=3
  rb.scale=0.1
}
function GB(){
  var gb = createSprite(0,250,10,10)
  gb.addImage(gb1)
  gb.y=Math.round(random(20,370))
  gb.velocityX=3
  gb.scale=0.1
}
function BB(){
  var bb = createSprite(0,250,10,10)
  bb.addImage(bb1)
  bb.y=Math.round(random(20,370))
  bb.velocityX=3
  bb.scale=0.1
}
function PB(){
  var pb = createSprite(0,250,10,10)
  pb.addImage(pb1)
  pb.y=Math.round(random(20,370))
  pb.velocityX=3
  pb.scale=1.2
}
 