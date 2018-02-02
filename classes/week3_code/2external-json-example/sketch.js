let flower;

function setup() {
  createCanvas(400, 400);
  flower = loadJSON("flower.json");
}

function draw() {
    background(0);
    
    fill(flower.col);
    text(flower.name, 10, 50);

}