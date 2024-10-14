const express=require('express');
const app=express();
//handling the  code


// app.use((req,res)=>{	
// 	res.send("hello from the server");//server handler 
// 	//whatever request it would return the same piece of code wheather it's / or /test it will work same
// 	//to handle server request seperately we need to write in qoutes followed by / = "/test"
// })
app.use("/test",(req,res)=>{
	res.send("hello from test routing ")
})
app.use("/",(req,res)=>{
	res.send("hel")
})
app.listen(7777,()=>{
	console.log("app is listening in port 7777")//this will only work if server is running
});

//install nodemon it will auto refresh the code whenever it's refresh and rerun the server 
//we can write our own script to start the server instead of writing big lines of code again and again
// to do that so goto package.json and write script
//"start":"nodemon src/app.js"
//start and dev are custom script
//package log.json is sufficient to create node module once again if it's deleted
//ignore the node_modules in github by adding file .ignorer and add path as node_module