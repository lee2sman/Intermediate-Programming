var vegetables;

function preload(){
  vegetables = loadJSON("vegetables.json");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(0);
    
    fill(255);
    text("I love to eat "+vegetables.names[1]+"s.", 10, 50);
    //text("I love to eat "+vegetables.names[floor(random(vegetables.names.length))]+"s.", 10, 50);

}