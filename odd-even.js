// use  no-return 
function evenOdd(num) {
    if (num % 2 == 0) {
        console.log("it is even Number");
    }
    else {
        console.log("it is odd number");
    }
}
// evenOdd(99);

// use return 

function oddEven(num) {
    if (num % 2 == 0) {
        return "it is even";
    }
    else {
        return "it is odd";
    }
}
let getOddEven = oddEven(222);
console.log(getOddEven);