function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return 'This Year Is Leap Year';
    }
    else {
        return 'This Year Is Not Leap Year';
    }
}
let year = isLeapYear(2000);
console.log(year);