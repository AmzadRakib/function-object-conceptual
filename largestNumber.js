// use no-return

/* function findLargestNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    }
    else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}
findLargestNum(2, 3, 7); */



// use return 

function largestNumFind(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
let largestNum = largestNumFind(33, 22, 44);
console.log(largestNum);
