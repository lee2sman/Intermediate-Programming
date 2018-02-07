//example from Dan Shiffman's Coding Train 10.4
//URL from http://open-notify.org/Open-Notify-API/People-In-Space/

function setup(){
    createCanvas(200,200);
    loadJSON("http://api.open-notify.org/astros.json", dataReceived, 'jsonp');
}


function dataReceived(data){
   background(255);
    for (let i = 0; i < data.number; i++){
        fill(random(255),random(255),random(255));
        ellipse(random(width),random(height),10,10);
    }
}