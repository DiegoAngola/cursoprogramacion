document.querySelector("#login_btn").setAttribute("onclick","validacion()");
let user = document.querySelector("#username");
let pass = document.querySelector("#password");
let pass2 = document.querySelector("#password2");
let mens = document.querySelector("#mensaje");

console.log(user, " - ", pass, " - ", mens);



function validacion(){
    mens.className = "rojo";
    if (user.value.trim() === "") {
        mens.value = "Falta nombre de usuario";
        return;
    }

    user.value = user.value.trim();

    if (pass.value.trim() === "") {
        mens.value = "Falta Password";
        return;
    }

    if (pass2.value.trim() === "") {
        mens.value = "Falta Password 2";
        return;
    }

    mens.className = "verde";
    mens.value = "Perfecto, ingresa";


}