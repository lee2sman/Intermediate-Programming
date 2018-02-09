//URL from http://open-notify.org/Open-Notify-API/People-In-Space/
//from Coding Train 10.4

let x = 0;
let spaceData;
let earthImg;
let astroImg;

function preload(){
   earthImg = loadImage("images/earth.png");
   astroImg = loadImage("images/astro.png");
}

function setup(){
    createCanvas(200,200);
    loadJSON("http://api.open-notify.org/astros.json", dataReceived, 'jsonp');
    imageMode(CENTER);
}


function dataReceived(stuff){
   background(0);
   spaceData = stuff;  
   image(earthImg,width/2,height/2); 
    
    
    if (spaceData){   //evaluates to true if there is data there
        for (let i = 0; i < spaceData.number; i++) {
            fill(random(255),random(255),random(255));
            image(astroImg,random(20,width-20),random(20,height-20));
        }
    }
}

function draw() {
    //background(0);
   
}
    