let users = [
    {username: "hkpau", password: "12345"},
    {username: "test", password: "test123"}
];

let usernameVal = prompt("Username : ");
let passwordVal = prompt("Password : ");

function loginProcess(name, pass)
{
    if(((users[0].username === name) && (users[0].password === pass)) || ((users[1].username === name) && (users[1].password === pass))){
        alert("Login Success");
    }else{
        alert("Login Fault!!!");
    }
}

loginProcess(usernameVal, passwordVal);