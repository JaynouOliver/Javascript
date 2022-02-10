function whosPayingForLunch(names){
    var numberofPeople = names.length;
    var randomPersonPositioin = Math.floor(Math.random()*numberofPeople);
    var randonPerson = names[randomPersonPositioin];

    return randonPerson + "is going to buy us the Lunch today!";
}