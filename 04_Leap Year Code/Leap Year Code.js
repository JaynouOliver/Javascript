function leapYearCode(year){
    if (year % 4 === 0){
        if (year % 100){
            if (year % 400){
                return "Leap Year";

            }
            else{
                return "Not a leap Year";
            }

        }
        else {
            return "Leap Year";
        }
    }
    else {
        return "Not a leap Year";
    }
}
console.log(leapYearCode(2004));