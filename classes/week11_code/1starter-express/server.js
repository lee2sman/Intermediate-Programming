// part 1
console.log("Our server is running.");

//part 2
const express = require('express');

const app = express();

const server = app.listen(3000, served);

function served(){
	console.log("Served...");
}

// part 3
app.use(express.static('website'));

// part 4 - COMMENT OUT PART 4 BEFORE STARTING 5
//app.get('/hot_sauce', sendSauce);
//
//function sendSauce(request, response){
//	response.send("Hot sauce is the best.");	
//}

// part 5
//app.get('/search/:hot_sauce', sendSauce);

//function sendSauce(request, response){
	//let data = request.params;
	//response.send(data.hot_sauce+" is the best.");	
//}

// part 6
app.get('/search/:hot_sauce/:num', sendSauce);

function sendSauce(request, response){
	let data = request.params;
	let num = data.num;

	response.send(data.hot_sauce+" is the best. I could eat it " + num+" times without getting sick.");	
}
