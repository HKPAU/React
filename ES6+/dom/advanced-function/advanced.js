const textFunction = function (){
    console.log("Text Function Content!");
}

const textFunction2 = () => {
    console.log("Text Function 2 Content!")
}

const sumProcess = (number1,number2) => {
    const result = number1 + number2;
    return result;
}

textFunction();
textFunction2();
let sumResult = sumProcess(10, 20);
console.log(sumResult);