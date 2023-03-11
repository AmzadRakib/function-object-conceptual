function oddEvenSum(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenSum = evenSum + arr[i];
        }
        else {
            oddSum = oddSum + arr[i];
        }
    }
    return { evenSum, oddSum };
}

const sumNumber = [3, 4, 5, 2, 66, 45, 23];
let findOddEven = oddEvenSum(sumNumber);
console.log(findOddEven);