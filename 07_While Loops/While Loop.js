// This code is just an example of While loop, please don't run it, may crash!

var output = [];
var count = 1;
function fizzBuzz(){
    while(count <= 100){
        if (count % 3 === 0 && count % 5 === 0){
            output.push("FizzBuzz");
        }
        if (count % 3 === 0){
            output.push("Fizz");

        }
        else if (count % 5 === 0){
            output.push("Buzz");
        }
        else {
            output.push(count);

        }
    }
}