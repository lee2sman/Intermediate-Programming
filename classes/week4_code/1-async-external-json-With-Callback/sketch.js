function setup(){
    loadJSON("flower.json", dataReceived);

}


function dataReceived(data){
    console.log("here is the data: ");
    console.log(data);

}