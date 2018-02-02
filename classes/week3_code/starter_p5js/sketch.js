let name = ["Joseph", "Matthew", "Sungmin Lee", "Jason", "Camille", "Edi", "Zane", "Kane", "Kyro"];
let age;

function setup() { 
  createCanvas(400, 400);
  age = floor(random(0,200));
   
   background(0);
  fill(100,255,100);
    
    let whichName = floor(random(0,name.length));
    
    
  text(name[whichName] + " is " + age + " years old",20,20);
} 

function draw() { 
    
}
