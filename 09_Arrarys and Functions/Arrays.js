var guestList = ["subhro", "Ronit", "Kaustav", "gujan", "Raja"];
console.log(guestList.length);

// also
var guestname = prompt("What is your name");
if (guestList.includes(guestname)){
    alert("Welcome")
}
else {
    alert("Sorry maybe next time! ");
}
