const btn = document.querySelector("#boton").setAttribute("onclick","enviar()")


function enviar(){
console.log("me active")
const name = document.querySelector("#name").value;
const result = document.querySelector(".nya");

result.innerHTML = "Nombre y Apellido: " + name;


const genero = document.forms[0];
let txt = "";
let i;
for (i = 0; i < genero.length; i++) {
  if (genero[i].checked) {
    txt = txt + genero[i].value + " ";
  }
  document.querySelector(".sex").innerHTML = "Su sexo es:  " + txt;
}





    let markedCheckbox = document.getElementsByName('tarjeta');
    for (let checkbox of markedCheckbox) {
      if (checkbox.checked)
      document.querySelector(".tdcs").innerHTML = "Posee las siguientes tarjetas de credito: " + checkbox.value;
    }



}