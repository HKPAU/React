let count = 1;
let maxNumber = 10;
let languages = ["PHP", "ReactJS", "Javascript", "JQuery", "Laravel", "Symfony"];

/* While Sample */

/*
while(count <= maxNumber)
{
    console.log(count);
    count++;
}
*/




/* For Sample */
/*for (let i = count; i <= maxNumber; i++) {
    console.log(i);
}*/




/* Foreach */
languages.forEach(function (value, key){
    console.log("Key Value : " + key + " & Programming Language : " + value);
});
