// VERIFICAR SI STORAGE ES COMPATIBLE CON NUESTRO NAVEGADOR

if (typeof(Storage) !== "undefined"){
    console.log(Storage);
}else {
    console.log("Storage no es compatible con el navegador");
}

let dataRed = function(){
//ARMADO DE OBJETO CON LOS DATOS DE LA INTERFAZ
let datos = {
    nombre: document.querySelector("#nombre").value,
    apellido: document.querySelector("#apellido").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#pass").value,
}
//GUARDAR EL OBJETO DATOS EN EL LOCALSTORAGE (PERSISTENCIA DE DATOS)
    grabarLocalStorage(datos);

}

let grabarLocalStorage = function(datos){
    localStorage.setItem("miInfo", JSON.stringify(datos));
}




let capturaBoton = function(){
    document.querySelector(".botones input").setAttribute("onclick","dataRed()")
}

let main = function(){
    capturaBoton();
}

main();