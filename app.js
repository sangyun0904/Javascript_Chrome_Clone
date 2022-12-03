const LoginForm = document.querySelector("#Login-form");
const LoginInput = document.querySelector("#Login-form input");
const LoginButton = document.querySelector("#Login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    const username = LoginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username} !`; // not '' or "" but only `` !!!!! mac : ₩
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log(username);
} 

const savedUSername = localStorage.getItem(USERNAME_KEY);

if(savedUSername === null) {
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUSername} !`;
}