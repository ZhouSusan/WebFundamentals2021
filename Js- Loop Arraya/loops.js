function printsNum() {
    for (var idx = 1; idx < 21; idx+=2) {
        console.log(idx);
    }
}
printsNum();


function multipleOfThrees() {
    for (var idx = 100; idx >= 0; idx--) {
        if (idx % 3 == 0) {
            console.log(idx);
        }
    }
}
multipleOfThrees();


function printSequence() {
    var sequence = [4, 2.5, 1, -0.5, -2, -3.5]

    for (var idx = 0; idx < sequence.length; idx++) {
        console.log(sequence[idx]);
    }
} 
printSequence();


function sigma() {
    var total = 0;
    for (var idx= 0; idx < 101; idx++) {
        total += idx;
    }
    return total;
}
console.log(sigma());


function factorial(num) {
    var idx = 1;
    var product = 1;
    while(idx <= num) {
        product *= idx;
        idx++;
    }
    return product;
}
console.log(factorial(12));