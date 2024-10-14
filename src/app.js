const express=require('express');
const app=express();

/*
dont write app.use("/user",(req,res)) here other wise it will override all the api of /user and runs the callback of app.use 

*/
//instead of app.use  it will by deafult it get api  and this will match all the http api use app.methodName "app.get,app.post"
app.get("/user",(req,res)=>{
	res.send({
		"firstName":"pawan",
		"lastname":"saw"
	})

})//this will handle only get api of users

app.post("/user",(req,res)=>{
	res.send("send successfully");
})










app.listen(7777,()=>{
	console.log("app is listening in port 7777")//this will only work if server is running
});



//handling the  code


// app.use((req,res)=>{	
// 	res.send("hello from the server");//server handler 
// 	//whatever request it would return the same piece of code wheather it's / or /test it will work same
// 	//to handle server request seperately we need to write in qoutes followed by / = "/test"
// })
// app.use("/test",(req,res)=>{
// 	res.send("hello from test routing ")
// })
// app.use("*",(req,res)=>{
// 	res.send("erroe")
// })
// app.use("/",(req,res)=>{
// 	res.send("hel")
// })


//install nodemon it will auto refresh the code whenever it's refresh and rerun the server 
//we can write our own script to start the server instead of writing big lines of code again and again
// to do that so goto package.json and write script
//"start":"nodemon src/app.js"
//start and dev are custom script
//package log.json is sufficient to create node module once again if it's deleted
//ignore the node_modules in github by adding file .ignorer and add path as node_module
// if routes is started with "/" it will always work the callback of "/" and it will give everything we write the same routes address
// if specific routes is written above of "/" it will work fine 
//it should never be written above of the code other wise it will always redirect to same routes and it will override because the routes started with "/" it will treat as a string finder it will mathces with the first letter /
// order should be correct so that it will redirect to perticular routes
// "/hello/2" should first then "/hello" then "/"
// we are making get api call  by default to perticular routes
