fetch("productos.csv")
    .then(function (res) {
        return res.text();
    })
    .then(function (data) {
        cargaArray(data);
    });

let arrayProductos = [];

function cargaArray(data) {
    let filas = data.split(/\r?\n|\r/);
    for (let i = 0; i < filas.length; i++) {
        let celdasFila = filas[i].split(",");

        const Producto = construccionObjetoProducto(celdasFila);
        console.log("Producto", Producto);


        arrayProductos[i] = Producto;
        console.log(`arrayProductos[${i}]: ${arrayProductos[i]}`);
    }
    console.log(arrayProductos);
    muestraProductos();
}

function construccionObjetoProducto(celdasFila) {
    const Producto = {
        rubro: "",
        producto: "",
        imagen: "",
    };
    Producto.rubro = celdasFila[0];
    Producto.imagen = celdasFila[1];
    Producto.producto = celdasFila[2];

    return Producto;
}

function muestraProductos() {
    console.log(arrayProductos);
    let template = ``,
        rubroleyenda;
    for (let r = 0; r < arrayProductos.length; r++) {
        console.log(arrayProductos[r].rubro);
        switch (arrayProductos[r].rubro) {
            case "1":
                rubroleyenda = "Computacion";
                break;
            case "2":
                rubroleyenda = "Celulares";
                break;
            case "3":
                rubroleyenda = "Electrodomesticos";
                break;
            default:
                rubroleyenda = "Sin Rubro"
                break;
        }
        template += `<article>`
        template += `<h2>"${rubroleyenda}"</h2>`
        template += `<img src="${arrayProductos[r].imagen}" alt="">`
        template += `<h3>${arrayProductos[r].producto}</h3>`
        template += `</article>`
    }
    document.querySelector(".articulos").innerHTML = template;
}