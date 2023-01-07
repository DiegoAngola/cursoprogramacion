function creamosItemsLS() {
    if (!localStorage.getItem("superheroes")) {
        //CREAR ITEM SUPERHEROES EN LOCALSTORAGE
        let heroe = [
            { nombre: "Ironman", likes: 0, dislikes: 0 },
            { nombre: "Capitan America", likes: 0, dislikes: 0 },
        ];
        localStorage.setItem("superheroes", JSON.stringify(heroe));
    }
    mostrarLikes();
}

function mostrarLikes() {
    let dataStorage = JSON.parse(localStorage.getItem("superheroes"));
    document.querySelector("#im").innerHTML = `Likes: ${dataStorage[0].likes}-
    dislikes: ${dataStorage[0].dislikes}-`;
    document.querySelector("#ca").innerHTML = `Likes: ${dataStorage[1].likes}-
    dislikes: ${dataStorage[1].dislikes}-`;
}

function agregarLike(quien) {
    let dataStorage = JSON.parse(localStorage.getItem("superheroes"));
    switch (quien) {
        case "I":
            dataStorage[0].likes++;
            break;
        case "A":
            dataStorage[1].likes++;
            break;
        default:
            break;
    }
    localStorage.setItem("superheroes", JSON.stringify(dataStorage));
    mostrarLikes();
}

function agregarDislike(quien) {
    let dataStorage = JSON.parse(localStorage.getItem("superheroes"));
    switch (quien) {
        case "I":
            dataStorage[0].dislikes++;
            break;
        case "A":
            dataStorage[1].dislikes++;
            break;
        default:
            break;
    }
    localStorage.setItem("superheroes", JSON.stringify(dataStorage));
    mostrarLikes();
}

function elimina(){
    localStorage.removeItem("superheroes");
    creamosItemsLS();
}

function main() {
    creamosItemsLS();
}
main();