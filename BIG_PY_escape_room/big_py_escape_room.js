var _username = 0


var _password = 0

function printUsername() {
    const username = document.getElementById('username').value;
    _username = username;
}

function printPassword() {
    const password = document.getElementById('password').value;
    _password = password;
}

function successLogin(){
    location.replace("./big_py_escape_room_hint.html");
}

// var button = document.getElementById("submit-button")
// button.addEventListener('click', function(){
//     if((_username == "maro") && (_password == '1234')){
//         alert("good");
//     }
// })
