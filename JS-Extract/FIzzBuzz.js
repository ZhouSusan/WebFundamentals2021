/* Write code that will go through each number from 1 to 100 and:

For each number that is a multiple of 3, print "Fizz"
For each number that is a multiple of 5, print "Buzz"
For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
All other numbers should just print normally */

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzzz");
        } else if (i % 3 == 0) {
            console.log("Buzz");
        } else if (i % 5 == 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();