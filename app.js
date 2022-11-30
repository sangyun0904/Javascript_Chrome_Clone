const LoginForm = document.querySelector("#Login-form");
const LoginButton = document.querySelector("#Login-form button");


function onLoginSubmit(tomato) {
    tomato.preventDefault();
    console.log(tomato);
}

LoginForm.addEventListener("submit", onLoginSubmit);