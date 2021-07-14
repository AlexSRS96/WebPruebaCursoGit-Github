// Empezarea a realizar los cambios con JS

// Generando modal btn comprar
let btnComp = document.getElementById("btn-buy");
let inputCant = document.getElementById("txtcant");

btnComp.addEventListener("click", () => {
    if (inputCant.value > 0) {
        alert("Se agrego su compra exitosamente");
    } else {
        alert("Error!!! Compra minima 1 boleto");
    }
});

// boton incrementar
function increment() {
    let num = inputCant.value;


}

function decrement () {
    let num = inputCant.value;
}