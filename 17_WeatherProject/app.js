const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.listen(3000, function () {
    console.log("Server is running in port 3000");
  });

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // console.log(req.body.cityName) // this command bring the data given in the form by the user. Here is .cityName is the name of the input tag;

  const query = req.body.cityName;
  const apikey = "47092f93200d7c38f01548b62b"; // this won't work because exposing original api key publicly is not a good practice. // paste your own api key to use it.
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=47092f93200d7c38f018878b62b&units=metric#";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      //console.log(data); // This will give us the data we recieve from the website in the form of Hexadecimals like (<Buffer 7b 22 63 6f 6f 72 64 22 3a 7b 22 6c 6f 6e 22 3a 2d 30 2e 31 32 35 37 2c 22 6c 61 74 22 3a 35 31 2e 35 30 38 35 7d 2c 22 77 65 61 74 68 65 72 22 3a 5b ... 414 more bytes>)

      console.log(query);

    
      const weatherData = JSON.parse(data); // converts the data into javascript objects;
      const temp = weatherData.main.temp;
      const weatherDesription = weatherData.weather[0].description;
      res.write("<p>The weather is currently " + weatherDesription + "</p>"); // we can have multiple res.write
      res.write(
        "<h1> The temparature in "  + query +  " is " + temp + " degrees Celcius.</h1>"
      );
      res.send();
    });
  });
});


