

function validarEmail() {
  let email = document.querySelector("#email").value;
  const validRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //EXPRESIONES REGULARES

  if (email.match(validRegEx)) {
    alert("el email es correcto");
  } else {
    alert("el email es incorrecto");
  }
}