var tweet = prompt ("Compose your tweet");
var tweetunder140 = tweet.slice(0, 140);
alert(tweetunder140);
// We can also write the code as this -->
alert(prompt("compose your tweet").slice(0,140));
