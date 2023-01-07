document.querySelector("#sumar").setAttribute("onclick","sumar()");
document.querySelector("#restar").setAttribute("onclick","restar()");
document.querySelector("#multiplicar").setAttribute("onclick","multiplicar()");
document.querySelector("#dividir").setAttribute("onclick","dividir()");
// document.querySelector("calcular").setAttribute("onclick", "calcular()");
let resultado = document.querySelector("#resultado");
// let operacion = document.querySelector("#operacion")


    

        function sumar() {

            let n1 = parseFloat(document.querySelector("#n1").value);
            let n2 = parseFloat(document.querySelector("#n2").value);
        
        
            resultado.value = n1 + n2;
            
        }
    

    



function restar() {

    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);


    resultado.value = n1 - n2;
    
}

function multiplicar() {

    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);


    resultado.value = n1 * n2;
    
}
function dividir() {

    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);


    resultado.value = n1 / n2;
    
}





// function calcular() {

//     if (operacion === 0){

//         function sumar() {

//             let n1 = parseFloat(document.querySelector("#n1").value);
//             let n2 = parseFloat(document.querySelector("#n2").value);
        
        
//             resultado.value = n1 + n2;
            
//         }
//     }

    
// }



