//declaring global variables
var canvas;
var music;
var box, pinkbox, whitebox, bluebox, greenbox;
var edge1, edge2, edge3;

//loading sounds
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
//creating canvas
    canvas = createCanvas(800,600);

//pink, white, blue and green boxes/ surfaces
    pinkbox = createSprite(100,585,190,30);
    pinkbox.shapeColor = "pink";

    whitebox = createSprite(300,585,190,30);
    whitebox.shapeColor = "white";

    bluebox = createSprite(500,585,190,30);
    bluebox.shapeColor = "lightblue";

    greenbox = createSprite(700,585,190,30);
    greenbox.shapeColor = "lightgreen";

//creating the box sprite and adding velocity
    box = createSprite(300,400,50,50);//(random(20,750));
    box.shapeColor = "grey"
    box.velocity = 4;
   // box.x = worldMouseX

//creating the edges sprites
    edge1 = createSprite(-5,150,20,900)
    edge1.visible = false;
 
    edge2 = createSprite(805,150,20,900)
    edge2.visible = false;

    edge3 = createSprite(400,-2,900,20)
    edge3.visible = false;

}

function draw() {
//adding the background and the color 
    background(rgb(200,200,400))
   
    if(box.isTouching(edge1))
   {
        edge1.visible = false;
   }

//add condition to check if box touching surface and make it box
    //box.bounceOff
    drawSprites();
}
