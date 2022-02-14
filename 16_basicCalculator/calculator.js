const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {  
    res.sendFile(__dirname + "/calculator.html"); // _dirname detects the location of calculator.js and adding (+calculator.html) gives the total location as (C:\Users\Subhr\Documents\GitHub\Javascript\15_Express.js\basicCalculator\calculator.html)
})

app.post("/", function(req, res){
    console.log(req.body); // this command pulls the data given in the website to my terminal;
    var num1 = Number(req.body.num1); // converts the data given in the website to a number
    var num2 = Number(req.body.num2);
    var result = (num1 + num2); // adding the two numbers
    res.send("the result of the calculatoin is " + result); // post request (sending a message to the client after they entered the value);
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
    console.log(req.body);
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / Math.pow(height, 2);
    res.send("Your BMI is " + bmi );
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})