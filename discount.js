/* function discountCalc(price) {
    if (price > 5000) {
        const discountPrice = price * (20 / 100);
        const netPrice = price - discountPrice;
        console.log('You will get 20% Discount', netPrice);
    }
    else if (price >= 3000) {
        const discountPrice = price * (15 / 100);
        const netPrice = price - discountPrice;
        console.log('You will get 15% Discount', netPrice);
    }
    else if (price >= 1000) {
        const discountPrice = price * (10 / 100);
        const netPrice = price - discountPrice;
        console.log('You will get 10% Discount', netPrice);
    }
    else {
        console.log("You can not get discount tui hala gorib choda ");
    }
}

let price = discountCalc(4434); */


function discountCalc(courseFee) {
    const discountPrice = courseFee * (60 / 100);
    const netPrice = courseFee - discountPrice;
    console.log(netPrice);
}
discountCalc(15000);