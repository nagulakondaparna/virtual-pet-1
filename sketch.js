//Create variables here
var dog,happydDog,database,foodStock,foodS;

function preload(){
  dogimg = loadImage("dogImg.png");
  dogimg2 = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500,500);

  database = firebase.database();
  foodStock = database.ref('food');

  dog = createSprite(250,280,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.2;
 
}


function draw() {  
background("turquoise");
if(keyWentDown(UP_ARROW)){
  dog.addImage(dogimg2);
}
  drawSprites();
  fill("Black");
  textSize(20);
  stroke(5);
  text("Press Up Arrow Kew To Feed Drago milk",70,100);
}
function readStock(data){
  foodS=data.val();
}


function writeStock(x){

if (x <=0) {
  x=0;
  
 }else {
x = x -1;

}

database.ref('/').update({
  food:x
})
}
