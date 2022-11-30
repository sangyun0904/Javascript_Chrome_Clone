const LoginForm = document.querySelector("#Login-form");
const LoginInput = document.querySelector("#Login-form input");
const LoginButton = document.querySelector("#Login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    const username = LoginInput.value;
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username} !`; // not '' or "" but only `` !!!!!
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log(username);
} 

LoginForm.addEventListener("submit", onLoginSubmit);