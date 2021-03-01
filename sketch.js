var garden,garden_im;
var tom,tom_im1,tom_im2,tom_im3,tom_im4;
var jerry,jerry_im1,jerry_im2,jerry_im3,jerry_im4;








function preload() {
    //load the images here
    garden_im=loadImage("images/garden.png");

    tom_im1=loadAnimation("images/cat1.png");
    
    tom_im2=loadAnimation("images/cat2.png","images/cat3.png");
   
    tom_im4=loadAnimation("images/cat4.png");

    jerry_im1=loadAnimation("images/mouse1.png");
    jerry_im2=loadAnimation("images/mouse2.png","images/mouse3.png");
    
    jerry_im4=loadAnimation("images/mouse4.png");
    

}

function setup(){
    createCanvas(1000,800);
   
   // garden=createSprite(500,400);
   // garden.addImage(garden_im);

    //create tom and jerry sprites here
    tom=createSprite(800,600);
    tom.addAnimation("tom sleeping",tom_im1);
    tom.addAnimation("tom runing ",tom_im4);
    tom.scale=0.1;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerry sstanding",jerry_im1);
    jerry.scale=0.1;


}

function draw() {

    
    background(garden_im);

    //Write condition here to evalute if tom and jerry collide



    drawSprites();
}


function keyPressed(){

    if(keyCode=== LEFT_ARROW){
        tom.velocityX=-4;
       
        tom.changeAnimation("tom runing",tom_im4);
        

    }

  //For moving and changing animation write code here


}
