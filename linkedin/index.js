const resultado = document.getElementById('resultado');

const {timer} = rxjs;

const {map} = rxjs.operators;

timer(1000, 1000).pipe(map (()=>{
    const ahora = new Date();
    return ahora.toLocalString();
})).suscribe(valor => {
    resultado.innerText = valor;
})