// Empezarea a realizar los cambios con JS

// Generando modal btn comprar
let btnComp = document.getElementById("buy1");
let inputCant = document.getElementById("txtcant");
let btnIncrement =  document.getElementById("increment");
let btnDecremenr = document.getElementById("decrement");

btnComp.addEventListener("click", () => {
    if (inputCant.value > 0) {
        alert("Se agrego su compra exitosamente");
    } else {
        alert("Error!!! Compra minima 1 boleto");
    }
});

// btn-incremento
btnIncrement.addEventListener("click", () => {
    if (inputCant.value >= 0) {
        inputCant.value++;
        inputCant.innerText = inputCant.value;
    }
});
// btn-decremento
btnDecremenr.addEventListener("click", () => {
    if (inputCant.value > 0) {
        inputCant.value--;
        inputCant.innerText = inputCant.value;
    } else {
       inputCant.innerText = 0;
    }
});

conle.log("Si encuentras esto eres programador o tienes conocimientos sobre el desarrollo web");

// Nuestro colaborador podra agregar contenido

conso.log("Gracias por visitar mi pagina");

