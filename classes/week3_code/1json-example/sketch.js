let flower;

function setup() {
  createCanvas(400, 400);
  flower = {
      name: 'sunflower',
      c: color(200,220,0)
  }
}

function draw() {
    background(0);
    
    fill(flower.c);
    text(flower.name, 10, 50);

}