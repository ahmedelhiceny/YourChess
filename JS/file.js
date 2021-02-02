const container1 = document.querySelector(".container"),
    con1 = document.querySelector(".container3 div:nth-of-type(1)"),
    con2 = document.querySelector(".container3 div:nth-of-type(2)"),
    con3 = document.querySelector(".container3 div:nth-of-type(3)"),
    LogIn = document.querySelector(".LogIn"),
    SignIn = document.querySelector(".SignIn"),
    pract = document.querySelector(".Practise"),
    placeholder = document.querySelector(".container3 .sli .placeholder");

let flag = 1,
    flag2 = 1;

const interval = setInterval(_ => {
    if (flag == 1) {
        flag = 2;
        container1.style.backgroundImage = "url('../Images/back2.jpg')";
    } else if (flag == 2) {
        flag = 3;
        container1.style.backgroundImage = "url('../Images/back3.jpg')";
    } else if (flag == 3) {
        flag = 1;
        container1.style.backgroundImage = "url('../Images/back1.jpg')";
    }
}, 3000);

window.scroll({
    top: 0,
    left: 100,
    behavior: 'smooth'
});

const MovUp = _ => {

    if (flag == 1) {
        flag = 2;
        container1.style.backgroundImage = "url('../Images/back2.jpg')";
    } else if (flag == 2) {
        flag = 3;
        container1.style.backgroundImage = "url('../Images/back3.jpg')";
    } else if (flag == 3) {
        flag = 1;
        container1.style.backgroundImage = "url('../Images/back1.jpg')";
    }
}
const Start = _ => {
    window.scroll({
        top: 630,
        left: 0,
        behavior: 'smooth'
    });
}

let moveCon = _ => {
    if (flag2 == 3) {
        flag2 = 2;
        con1.style.left = '1550px';
        placeholder.style.left = '-1550px';
    } else if (flag2 == 2) {
        flag2 = 1;
        con1.style.left = '00px';
        placeholder.style.left = '0px';
    }
}
let moveCon2 = _ => {
    if (flag2 == 1) {
        flag2 = 2;
        con1.style.left = '1550px';
        placeholder.style.left = '-1550px';
    } else if (flag2 == 2) {
        flag2 = 3;
        con1.style.left = '3100px';
        placeholder.style.left = '-3100px';
    }
}
const MoveInLogIn = _ => {
    LogIn.style.top = '150px';
}

const MoveOut = _ => {
    LogIn.style.top = '-500px';
    SignIn.style.top = '-500px';
    pract.style.opacity = '0';
}
const getSinIn = _ => {
    LogIn.style.top = '-500px';
    SignIn.style.top = '150px';
}
const choosePlayer = _ => {
    pract.style.opacity = '1';
}
const StartGame = _ => {
    window.location.href = "../src/chess.html";
}