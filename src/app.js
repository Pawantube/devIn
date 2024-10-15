const express=require("express");
const app=express();
//case 1
/*app.get("/user",(req,res)=>{
	//if there is no routes handler callback api then it will continue on sending request till the browser defualt timer even if there's line of code like 	 
	//console.log("it will not work without res.send")
	//one routes can have multiple routes handler
	
	res.send("sended successfully")
})

*/
//case 2
/*app.get("/user",(req,res)=>{
	res.send("it will be only run");
	console.log("this will also run ");
},(req,res)=>{
	res.send("it will not be run callback will return from two line above and not run");
	console.log("this will also not run ");
})*/
//case 3
/*app.get("/user",(req,res)=>{
	//here is no res.send therefor it will keep on sending request
	console.log("it will run anyway but void of res.send will keep on sending request")
},(req,res)=>{
	res.send("this whole code will not work only sending request will be occurs");
	console.log("this will definetly not run")
})
*/
//case 4:using the next in parameter so that it will lend to next request handler
/*app.get("/user",(req,res,next)=>{
	next();//if next is before console it will first does next task then console.log
	console.log("it will run skip the code to third line and res.send of second handler will run")
	//next(); if next is here then it will does console.log then next task will do their job
},(req,res)=>{
	res.send("it will run now");
	console.log("this will also execute")
})
*/
//case 5: one have res.send still it passes next and 2nd also have res.send then it will encounter an error
/*app.get("/user",(req,res,next)=>{
	console.log("this line will work definitely")
res.send("this will works  but  next(); response  will not work and will give an error ");
next();//this will generate error " Cannot set headers after they are sent to the client"
//if the response is send to client it will not be able to resend connection would be stop close here
},(req,res)=>{
console.log("above res.send any synchronous code will work but after res.send it will throw an error")
res.send("when javascript see this line it will generate an error and will not run after this line before this normal synchronous code will work")
console.log("this console will also not work");
}
) 	
*/ 
 //case 6: if next is above then res.send in one then it will generate error when function returns from second and try's to run code of one of res.send
/*app.get("/user",(req,res,next)=>{
next();
res.send("it will not work and gives and error ");
},(req,res)=>{
	res.send("this will work first and return where it's called");
	console.log("now it's going to return from where it has been called")

})*/
//case 7:
/*app.get("/user",(req,res,next)=>{
	console.log("1")
	next();
	;
	},(req,res,next)=>{
		console.log("2")
		next();
	
	},(req,res,next)=>{
		console.log("3")
		next();
	
	}
	,(req,res)=>{
		res.send("this line will run but if there's again next(); then it will not give an error it will look for res.send in next parameter but if there's no next in last parameter it will keep on sending ")	
	})

*/
//case 8: binding in array it will not effect code but it will give clearity
/*app.get("/user",(req,res,next)=>{
console.log("proceed to next");
next();
},[(req,res,next)=>{
	console.log("this is inside arraya");
	next();
},(req,res,next)=>{
	console.log("this is inside array too")
	next();

}],(req,res)=>{
res.send("access received");
})

*/



app.listen(7777,()=>{
	console.log("app is listening in port 7777")
})