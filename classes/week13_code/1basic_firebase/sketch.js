let database;

function setup() {
  var config = {
   apiKey: "",
   authDomain: "",
   databaseURL: "",
   projectId: "",
   storageBucket: "",
   messagingSenderId: ""
 };
 firebase.initializeApp(config);

 console.log(firebase);

 database = firebase.database();
 
 let ref = database.ref('score');
    
 let data = {
     name: "Ben",
     score: -1
 }    
    
 ref.push(data);
    
    
    
    //INTERFACE
    
    
}

function draw() {
    
}
