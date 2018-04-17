function setup() {
    
//Initialize Firebase
	let config = {
		apikey: "",
		authDomain: "",
		databaseURL: "",
		storageBucket: "",
		messagingSenderID: "",
	};
	firebase.initializeApp(config); 

	//let's test it - we can check in browser console to make sure no errors
	console.log(firebase);
}

function draw() {
   

}
