const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var gameState = "onsling" // launched
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    chain = new Chain(bird.body,{x:200,y:50});

    getTime()
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    chain.display();    
    getTime()

    if(mouseIsPressed){
        if(gameState === "onsling"){
            Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
            }

    }
}

function mouseReleased(){
    if(gameState === "onsling"){
    chain.release();
    gameState = "launched"
    }
}
// WHen the bird is on the slingshot -- onsling
// once pull and leave it should be fired -- fired or released or launched

function keyPressed(){
    if(keyCode === 32 && gameState === "launched"){
        chain.attach(bird.body)
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        gameState = "onsling"
        bird.trajectory = [];
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
    var responseJSON = await response.json()
    //console.log(responseJSON)
    var response_1 = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON_1 = await response_1.json()
    //console.log(responseJSON_1)
    //2020-11-15T22:24:54.457522+05:30
    var datetime = responseJSON_1.datetime
    var hour = datetime.slice(11,13)
    console.log(hour)
}

/*
JSON - JavaScript Object Notation
variables numbers, text, array, boolean(true, false),null, undefined
JSON
{
    name1: value,
    name2: value,
    name3: value
}

options = {
    isStatic: true,
    restitution: 1,
    angle: 90,
    density: 
}

API APplication program interface


*/