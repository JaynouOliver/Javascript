// jshint version:6
const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World </h1>");
})

app.get("/contact", function(req, res){
    res.send("<h1>Contact me at Subhrokomol@gmail.com </h1>");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
