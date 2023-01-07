fetch("lista.csv")
    .then(function (res) {
        console.log(res);
        return (res.text());
    })
    .then(function (data) {
        console.log(data);
        mostrarTabla(data);
    });





function mostrarTabla(contenido) {
    let tabular;
    for (let r = 1; r <= 2; r++) {
        if (r === 1) {
            tabular = document.querySelector("#articulos");
        }

        else {
            tabular = document.querySelector("#celular");
        }
        
    let filas = contenido.split(/\r?\n|\r/);
    let template = ``;
    for (let i = 0; i < filas.length; i++) {
        let celdasFila = filas[i].split(',');
        if (celdasFila[0] === r.toString()) {
            template += `<article>`
            template += `<img src="${celdasFila[1]}" />`
            template += `<h4>${celdasFila[2]}</h4>`
            template += `</article>`
        }

        tabular.innerHTML = template;
        console.log(r)
    }
}
}