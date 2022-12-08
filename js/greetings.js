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
    paintGreetings(username);
} 

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; // not '' or "" but only `` !!!!! mac : ₩
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername)
}