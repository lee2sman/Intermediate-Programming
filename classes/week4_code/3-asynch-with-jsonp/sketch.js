//example from Dan Shiffman's Coding Train 10.4
//URL from http://open-notify.org/Open-Notify-API/People-In-Space/

function setup(){
    loadJSON("http://api.open-notify.org/astros.json", dataReceived, 'jsonp');
}


function dataReceived(data){
    console.log("here is the data: ");
    console.log(data);
}