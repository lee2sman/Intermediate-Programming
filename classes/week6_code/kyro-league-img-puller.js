
let imagesAll = [];

function preload(){
  //code to preload json file first
  //goes here

    //loading images into array
  for (let i = 0; i < Characters.length; i++){
      imagesAll[i] = loadImage("http://leagueoflegends.com/whatever/images/" + Characters.names[i].name + ".png");
  }

}



function setup(){
  let selection = random(characters.length);
  text("Hi, this is " + Characters.names[selection]);

  image(imagesAll[selection], 100, 100);
}
