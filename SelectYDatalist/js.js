let banderas = document.querySelector(".banderas");


function seleccionSelect() {
    let dato = document.querySelector("#select").value;
    console.log("select muestra: ", dato);
    switch (dato) {
        case "Argentina":

            banderas.innerHTML = "<img src='images/argentina.png'>";

            break;


        case "Brasil":

            banderas.innerHTML = "<img src='images/brasil.png'>"

            break;
        case "Alemania":

            banderas.innerHTML = "<img src='images/alemania.png'>"

            break;
        case "Colombia":

            banderas.innerHTML = "<img src='images/colombia.png'>"

            break;
        case "Peru":

            banderas.innerHTML = "<img src='images/peru.png'>"

            break;
        default:
            break;
    }

}


function borroSelect() {
    document.querySelector("#select").selectedIndex = 0;
    banderas.innerHTML = "";
}



function seleccionDatalist() {
    let dato = document.querySelector("#pais").value;
    console.log("Datalist muestra: ", dato);

    switch (dato) {
        case "Argentina":

            banderas.innerHTML = "<img src='images/argentina.png'>";

            break;


        case "Brasil":

            banderas.innerHTML = "<img src='images/brasil.png'>"

            break;
        case "Alemania":

            banderas.innerHTML = "<img src='images/alemania.png'>"

            break;
        case "Colombia":

            banderas.innerHTML = "<img src='images/colombia.png'>"

            break;
        case "Peru":

            banderas.innerHTML = "<img src='images/peru.png'>"

            break;
        default:
            break;
    }

}


function borroDatalist() {
    document.querySelector("#pais").value = "";
    banderas.innerHTML = "";
   

}