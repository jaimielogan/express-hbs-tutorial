const express = require("express");

let app = express();

app.get("/", function(req,res){
  res.json({message: "Hello from express!"});
});

app.get("/page2", function(req,res){
  res.json({message:"I am now page 2!!"});
});

app.listen(3000, function(){
  console.log("Listening to port",3000);
});
