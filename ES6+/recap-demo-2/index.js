let users = [
    {username: "hkpau", password: "12345"},
    {username: "test1", password: "1234"},
    {username: "test2", password: "4321"},
    {username: "test3", password: "3241"},
];

let usernameVal = prompt("Username");
let passwordVal = prompt("Password");

function userControl(user, pass, users)
{
    let state = false;
    users.forEach(function (userVal){
        if(userVal.username === user && userVal.password === pass){
            state = true;
        }
    })

    return state;
}

let control = userControl(usernameVal, passwordVal, users);
if(control){
    console.log("Login Success");
}else{
    console.log("Login Fault!!!");
}