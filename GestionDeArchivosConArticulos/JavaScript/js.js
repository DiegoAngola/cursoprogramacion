fetch("lista.csv")
    .then(function(res){
        console.log(res);
        return(res.text());
    })
    .then(function(data){
        console.log(data);
        mostrarTabla(data);
    });





function mostrarTabla(contenido) {
    let tabular = document.querySelector(".contenedor");
    let filas = contenido.split(/\r?\n|\r/);
    let template = ``;
    for (let i = 0; i < filas.length; i++) {
        let celdasFila = filas[i].split(',');
        template += `<article>`
        template += `<img src="${celdasFila[0]}" alt=""></img>`
        template += `<h4>${celdasFila[1]}</h4>`
        template += `</article>`
    }
  
    tabular.innerHTML = template;
}

fetch("lista2.csv")
    .then(function(res){
        console.log(res);
        return(res.text());
    })
    .then(function(data){
        console.log(data);
        mostrarTabla2(data);
    });





function mostrarTabla2(contenido) {
    let tabular = document.querySelector(".celulares");
    let filas = contenido.split(/\r?\n|\r/);
    let template = ``;
    for (let i = 0; i < filas.length; i++) {
        let celdasFila = filas[i].split(',');
        template += `<article>`
        template += `<img src="${celdasFila[0]}" alt=""></img>`
        template += `<h4>${celdasFila[1]}</h4>`
        template += `</article>`
    }
  
    tabular.innerHTML = template;
}
