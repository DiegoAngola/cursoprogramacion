if (typeof (Storage) !== "undefined") {
    console.log(Storage);
} else {
    console.log("Storage no es compatible con el navegador");
}


//DECLARO EL ARRAY DE PRODUCTOS, VACÍO.
let arrayProductos = [];
//DECLARO EL FORMATO DEL PRODUCTO, NO NECESARIO, PERO INFORMATIVO
let producto = {
    descripcion: "",
    imagen: ""
}

if (localStorage.getItem("misProductos")) {
    arrayProductos = JSON.parse(localStorage.getItem("misProductos"));
} else {
    //ASIGNO MANUALMENTE EL PRIMER PRODUCTO
    //fuente de productos: https://revistabyte.es/recomendamos/productos-tic-mas-vendidos-amazon/

    producto = {
        descripcion: "Fire TV Stick 4K Ultra HD con mando por voz Alexa",
        imagen: "https://revistabyte.es/wp-content/uploads/2020/05/1-323x360.jpg.webp"
    }
    //LO AGREGO AL ARRAY
    arrayProductos.push(producto);

    //ASIGNO MANUALMENTE EL SEGUNDO PRODUCTO
    producto = {
        descripcion: 'TV Samsung 4K UHD de 50”',
        imagen: "https://revistabyte.es/wp-content/uploads/2020/05/4-425x360.jpg.webp"
    }
    arrayProductos.push(producto);
}
//INYECTO LOS PRODUCTOS DEL ARRAY EN LA SECCIÓN PRODUCTO
document.querySelector("#producto").innerHTML = armaTemplate();

//FUNCIÓN QUE SE INVOCA DESDE LA INTERFAZ PARA CARGAR NUEVOS ARTÍCULOS
function agregar() {
    //TOMO LOS VALUES DE DESCRIPCIÓN E IMAGEN DE LA INTERFAZ
    let des = document.querySelector("#desc").value;
    let img = document.querySelector("#dirImg").value;

    //ARMO EL OBJETO
    producto = {
        descripcion: des,
        imagen: img
    }
    //AGREGO EL PRODUCTO AL ARRAY
    arrayProductos.push(producto);
    console.log(arrayProductos);

    //SIGO EL MISMO PROCEDIMIENTO QUE CUANDO SE HACÍA MANUAL, LÍNEA 112
    document.querySelector("#producto").innerHTML = armaTemplate();
}

//FUNCION QUE ARMA EL TEMPLATE DE ARTÍCULOS CON LOS PRODUCTOS DEL ARRAY Y RETORNA EL TEMPLATE
function armaTemplate() {
    console.log("hola")
    let template = '';
    for (let i = 0; i < arrayProductos.length; i++) {

        template += `<article>
                                <h3 class="descripcion">${arrayProductos[i].descripcion}</h3>
                                <img src="${arrayProductos[i].imagen}" class="imagen">
                             </article>`
    }
    return template;
}

function listado() {
    localStorage.setItem("misProductos", JSON.stringify(arrayProductos));
    location.href = "listadoProd.html";
}
