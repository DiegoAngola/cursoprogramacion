document.querySelector("#archivo1").addEventListener("change", leerArchivo, false);

function leerArchivo(e) {
    let archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    let lector = new FileReader();
    lector.readAsText(archivo);
    lector.onload = function (e) {
        let contenido = e.target.result;
        mostrarContenido(contenido);
    }
}

function mostrarContenido(contenido) {
    let parrafo = document.querySelector("#parrafo");
    parrafo.innerHTML = contenido;
}


document.querySelector("#archivo2").addEventListener("change", leerArchivo2, false);

function leerArchivo2(e) {
    let archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    let lector = new FileReader();
    lector.readAsText(archivo);
    lector.onload = function(e) {
        let contenido = e.target.result;
        mostrarTabla(contenido);
    }
}

function mostrarTabla(contenido) {
    let tabular = document.querySelector("#tabular");
    let filas = contenido.split(/\r?\n|\r/);
    let template = `<table>`;
    for (let i = 0; i < filas.length; i++) {
        let celdasFila = filas[i].split(',');
        if (i == 0) {
            template += `<tr><th>${celdasFila[0]}</th><th>${celdasFila[1]}</th><th>${celdasFila[2]}</th><th>${celdasFila[3]}</th></tr>`
        }
        else {
            template += `<tr><td>${celdasFila[0]}</td><td>${celdasFila[1]}</td><td>${celdasFila[2]}</td><td><img src="images/${celdasFila[3]}"></td></tr>`
        }
    }
    template += `</table>`;
    tabular.innerHTML = template;
}



document.querySelector("#exportar").setAttribute("onclick","exportarArchivo()");

function exportarArchivo() {
    let texto = document.querySelector("#texto").value;
    let nombreArchivo = "textogenerado.txt";
    blob = new Blob([texto], {type: "octet/stream"});
    url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = nombreArchivo;
    a.click();
    window.URL.revokeObjectURL(url);
}