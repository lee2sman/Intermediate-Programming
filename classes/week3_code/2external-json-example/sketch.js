let flower;

function preload(){
    flower = loadJSON("flower.json");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(0);
    
    fill(flower.col);
    text(flower.name, 10, 50);

}