let template ="";
let miInfo, datos;

let borrarlocalStorage = function() {
    // localStorage.clear(); // PARA BORRAR TODO EL CONTENIDO DE LOCALSTORAGE
    localStorage.removeItem("miInfo");
}

let leerLocalStorage = function(){
    console.log("leer");
    if (localStorage.getItem("miInfo")){
        miInfo = localStorage.getItem("miInfo");
        // console.log(miInfo);
        datos = JSON.parse(miInfo);
        // console.log(datos.nombre);
        template = `<h1> BIENVENIDO ${datos.nombre} ${datos.apellido}</h1>`

    }else{
        template = `<h1> No se encontro el contenido en el localStorage</h1>`
    }
    //console.log(template);
    document.querySelector("#contenedorHeader").innerHTML = template;
}

leerLocalStorage();