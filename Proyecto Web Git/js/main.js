// Empezarea a realizar los cambios con JS

// Generando modal btn comprar
let btnComp = document.getElementById("buy1");
let inputCant = document.getElementById("txtcant");

btnComp.addEventListener("click", () => {
    if (inputCant.value > 0) {
        alert("Se agrego su compra exitosamente");
    } else {
        alert("Error!!! Compra minima 1 boleto");
    }
});

//Creando funciones para botones
// btn-incremento
let btnIncrement =  document.getElementById("increment");
btnIncrement.addEventListener("click", () => {
    if (inputCant.value >= 0) {
        inputCant.value++;
        inputCant.innerText = inputCant.value;
    }
});
// btn-decremento
let btnDecremenr = document.getElementById("decrement");
btnDecremenr.addEventListener("click", () => {
    if (inputCant.value > 0) {
        inputCant.value--;
        inputCant.innerText = inputCant.value;
    } else {
        alert("No se puede disminuir a menos de 0");
    }
});

