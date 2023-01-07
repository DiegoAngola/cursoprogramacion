let saldo = 500;
let apuesta = document.querySelector("#apuesta");
let numero = document.querySelector("#numero");
let dados = document.querySelector("#dado");
let resultado = document.querySelector("#resultado");

function lanzar(){
apuesta = apuesta.value;
console.log("la apuesta", apuesta)
//VALIDAMOS LOS DATOS INGRESADOS

if (apuesta > saldo || apuesta <= 0){
    alert("La apuesta no puede ser superior al saldo");
    document.querySelector("#apuesta").focus();
    return;
}

numero = parseInt(numero.value);
console.log("numero elegido", numero)

if (numero < 1 || numero >6 || isNaN(numero)){
    alert("El numero del dado debe ser entre 1 y 6")
    document.querySelector("#numero").focus();
    return;
}

dados = Math.floor((Math.random()*6) + 1);
console.log("salio", dados);
document.querySelector("#dado").value = dados;

// VALIDAMOS RESULTADOS

if (dados === numero){
    resultado.value = "GANASTE";

    // SUMAMOS AL SALDO

    saldo += apuesta * 2;
} else {
    resultado.value = "PERDISTE :("

    //RESTAMOS DEL SALDO

    saldo -= apuesta;
}
document.querySelector("#saldo").innerHTML = `Tienes un total de $${saldo} para jugar`

// VERIFICAMOS SALDO 
if (saldo <= 0){
    resultado.value = "No tienes saldo suficiente, vuelve a cargar mas";
    document.querySelector("#boton").disable = true;
}

}

function retiro(){
    resultado.value = `Te retiras con $${saldo}, vuelve pronto!`;
    document.querySelector("#boton").disable = true;

}
