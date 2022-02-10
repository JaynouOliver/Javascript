var name = prompt("What is your name?");
var firstChar = name.slice(0, 1);
var firstChartoUppercase = firstChar.toUpperCase();
var restofName = name.slice(1, name.length);
restofName = restofName.toLowerCase();
var totalName = firstChartoUppercase + restofName
alert("Hello" + totalName);

