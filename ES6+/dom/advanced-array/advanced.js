let numbersArr = [1,2,3,4];
let numbersPow = [];
numbersArr.forEach(numberVal => {
    var powNumber = numberVal * numberVal;
    numbersPow.push(powNumber);
})

numbersPow.forEach(powNumberVal => {
    console.log(powNumberVal);// Output : 1 4 9 16
})

console.log("********************");

//MAP Function
const mapArr = numbersArr.map(numberPowVal => numberPowVal * 2);
mapArr.forEach(x2NumberVal => {
    console.log(x2NumberVal);//Output : 2 4 6 8
})

console.log("********************");

//Filter Function
let filterArr = numbersArr.filter(biggerThanTwoVal => biggerThanTwoVal > 2);
filterArr.forEach(biggerNumber => {
    console.log(biggerNumber);//Output : 3 4
})

console.log("********************");

//Reduce Function 1
let reduceArr = numbersArr.reduce((acc,result) => {
    return acc + result;
});
console.log(reduceArr);//Output : 10 => 1 + 2 + 3 + 4

console.log("********************");

let reduceArr2 = numbersArr.reduce((acc,number) => {
    return acc + number;
}, 10);
console.log(reduceArr2);//Output : 20 => 10 + 1 + 2 + 3 + 4