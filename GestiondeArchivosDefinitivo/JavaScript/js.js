// PROCESO PARA LECTURAD DE ARCHIVO CSV

let main = document.querySelector("#contenido")

fetch("rubros.csv")

    .then(function (res) {  //en RES nos regresa el contenido

        // console.log(res);

        return (res.text()) //retornar el contenido en forma texto

    })

    .then(function (data) {  //con el contenido recibido armamos una función que lo aplica

        // console.log(data);

        cargaRubros(data);

    });



fetch("listas.csv")

    .then(function (res) {  //en RES nos regresa el contenido

        // console.log(res);

        return (res.text()) //retornar el contenido en forma texto

    })

    .then(function (data) {  //con el contenido recibido armamos una función que lo aplica

        // console.log(data);

        mostrarData(data);

    });



const rubros = [];



function cargaRubros(data_rubros) {

    let filas_rubros = data_rubros.split(/\r?\n|\r/);

    for (let i = 0; i < filas_rubros.length; i++) {

        data_rubros = filas_rubros[i].split(",");

        // console.log(data_rubros);

        rubros[i] = { codigo: data_rubros[0], descripcion: data_rubros[1], fondo: data_rubros[2], color: data_rubros[3] }

    }

}

// console.log(rubros);



function mostrarData(contenido) {

    let template = ``;

    for (let r = 0; r < rubros.length; r++) {

        let descripcion = removeAccents(rubros[r].descripcion).toLowerCase();

        let descripMayus = rubros[r].descripcion.toUpperCase();



        template += `<section class="parallax" id="${descripcion}">`;

        template += `<h3>${descripMayus}</h3>`;

        template += `<div class="contenedor">`;



        template += armarTemplateArticulos(r, contenido)



        template += `</div>`;

        template += `</section>`;



    }

    main.innerHTML = template;



    for (let r = 0; r < rubros.length; r++) {

        let descripcion = removeAccents(rubros[r].descripcion).toLowerCase();

        let seccion = document.querySelector(`#${descripcion}`);

        console.log(seccion);

        seccion.style.backgroundImage = `linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${rubros[r].fondo})`;

        seccion.style.color = `${rubros[r].color}`;

    }





}



function armarTemplateArticulos(r, contenido) {

    let filas = contenido.split(/\r?\n|\r/);

    let subTemplate = ``;

    for (let i = 0; i < filas.length; i++) {

        let celdasFila = filas[i].split(',')

        if (celdasFila[0] === (r + 1).toString()) {

            // console.log(celdasFila[0], " - ", celdasFila[1], " - ", celdasFila[2]);

            subTemplate += `<article>`

            subTemplate += `<img src="${celdasFila[1]}" alt="">`

            subTemplate += `<h4>${celdasFila[2]}</h4>`

            subTemplate += `</article>`

        }

    }

    return subTemplate;

}



const removeAccents = (str) => {

    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

}