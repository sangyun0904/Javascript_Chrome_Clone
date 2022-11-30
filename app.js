const LoginInput = document.querySelector("#Login-form input");
const LoginButton = document.querySelector("#Login-form button");


function onLoginBtnClick() {
    console.dir(LoginInput);
    console.log(LoginInput.value);
}

LoginButton.addEventListener("click", onLoginBtnClick)