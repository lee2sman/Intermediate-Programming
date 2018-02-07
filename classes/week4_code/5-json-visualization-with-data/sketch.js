//URL from http://open-notify.org/Open-Notify-API/People-In-Space/
//from Coding Train 10.4

let x = 0;
let spaceData;

function setup(){
    createCanvas(200,200);
    loadJSON("http://api.open-notify.org/astros.json", dataReceived, 'jsonp');
}


function dataReceived(data){
   spaceData = data; 
}

function draw() {
    background(0);
    
    if (spaceData){   //evaluates to true if there is data there
        for (let i = 0; i < spaceData.number; i++) {
            fill(random(255),random(255),random(255));
            ellipse(random(width),random(height),10,10);
        }
    }
}
    