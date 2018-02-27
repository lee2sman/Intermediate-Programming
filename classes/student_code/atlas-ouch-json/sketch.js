var other;

function preload() {
	 other = loadJSON("champions.json", dataReceived);
}

function setup(){
  createCanvas(1000,1000);
}

function dataReceived(data){
		console.log("it works");
        //This will dump out everything
		//console.log(data);
      //This will give us Thresh's normal wins data = 11816
    console.log(other.name["0"].Thresh.stats.total.wins.normal);
	}

function draw(){
	fill(150, 205)
    if ((other.name["0"].Thresh.stats.total.wins.normal) > (other.name["1"].Aatrox.stats.total.wins.normal)){
        console.log("Thresh won");
    } else {
       console.log("Aatrox won");
        
    }

}
    
