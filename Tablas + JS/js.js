let alumnos = [];
alumnos [0] = {nombre: "Julieta", apellido: "ponce de leon", telefono: "1134587514"};
alumnos [1] = {nombre: "Ramon", apellido: "Perez", telefono: "1134587514"};
alumnos [2] = {nombre: "Diego", apellido: "Angola", telefono: "1134587514"};
alumnos [3] = {nombre: "Luisa", apellido: "Ruiz", telefono: "1134587514"};
alumnos [4] = {nombre: "David", apellido: "Lopez", telefono: "1134587514"};
console.log(alumnos);


let fila, col1, col2, col3;
for (let i = 1; i < alumnos.length+1; i++) {
    fila = document.querySelector("#tabla").insertRow(i);
    col1 = fila.insertCell(0);
    col2 = fila.insertCell(1);
    col3 = fila.insertCell(2);
    col1.innerHTML = alumnos[i-1].nombre;
    col2.innerHTML = alumnos[i-1].apellido;
    col3.innerHTML = alumnos[i-1].telefono;

    console.log(i, alumnos[i-1].nombre, alumnos[i-1].apellido);
    
}