let template = "";
let misProductos, datos;



let leerLocalStorage = function () {
    console.log("leer");
    if (localStorage.getItem("misProductos")) {
        misProductos = localStorage.getItem("misProductos");
        datos = JSON.parse("misProductos");
        console.log(datos[0].descripcion)
        template += `<table>`
        template += `<tr>`
        template += `<th>Descripcion</th>`
        template += `<th>Imagen</th>`
        template += `</tr>`
        template += `<tr>`
        for (let i = 0; i < datos.length; i++) {
            template += `<td>${datos[i].descripcion}</td>`
            template += `<td><img src="${datos[i].imagen}" alt=""></td>`
            template += `</tr>`
            
        }
        template += `</table>`

    } else {
        template = `<h1> No se encontro el contenido en el localStorage</h1>`
    }
    document.querySelector("#inyec").innerHTML = template;
    // console.log(template)
}

leerLocalStorage();