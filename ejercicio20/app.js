let contenido = document.querySelector("#contenido");


fetch("lacteos.csv")
  .then(function (res) {
    return (res.text());
  })
  .then(function (data) {
    mostrarTabla(data);
  })


function mostrarTabla(data) {
  let filas = data.split(/\r?\n|\r/);
  // let monto = document.querySelector("#monto");
  let template = "";



  template += `<table>`
  template += `<tr>`
  template += `<th>CATEGORIA</th>`
  template += `<th>PRODUCTO</th>`
  template += `<th>PRECIO</th>`
  template += `<th>CANTIDAD</th>`
  template += `<th>TOTAL</th>`
  template += `</tr>`

  for (let i = 0; i < filas.length; i++) {
    let celdasfila = filas[i].split(',');

    // ``

    template += `<tr>`
    template += `<td>${celdasfila[0]}</td>`
    template += `<td>${celdasfila[1]}</td>`
    template += `<td><input id="p${i}" value="${celdasfila[2]}"></td>`
    template += `<td> <input type="number" id="c${i}" autocomplete="off" onchange="calcula(c${i},${i})"> </td>`
    template += `<td><input id="t${i}" readonly tabindex="-1" class="total"  value="0"></td>`
    template += `</tr>`


  }

  template += `<tr>`
  template += `<td></td>`
  template += `<td></td>`
  template += `<td></td>`
  template += `<td>SUBTOTAL</td>`
  template += `<td><input id="subto" readonly value="0"></td>`
  template += `</tr>`
  template += `<tr>`
  template += `<td></td>`
  template += `<td></td>`
  template += `<td></td>`
  template += `<td>TOTAL</td>`
  template += `<td></td>`
  template += `</tr>`

  template += `</table>`
  contenido.innerHTML = template;
}


function calcula(id, i) {
  console.log(id);
  console.log("Entré en calcula, con cantidad:", id.value, "i: ", i);

  let cantidad = Number(id.value);
  console.log("cantidad: ", cantidad);

  let total = document.querySelector(`#t${i}`);
  // total = Number(total.value);

  let precio = document.querySelector(`#p${i}`);
  
  precio = Number(precio.value)
 
  

  total.value = (cantidad * precio).toFixed(2);
 
  console.log(total.value)

  let subtotal = documen.querySelector("#subto")
  subtotal = total;
}
