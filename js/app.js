//Primera actividad de entrega
//Generar una pagina web que se va a componer de , html, css y js
//inicio: header, footer: escribir el nombre <h1> y una breve descripción <p>
// boton de input: Adivina mi numero favorito, si adivino poner excelente adivinaste si no poner si es mas alto o mas bajo el numero  <p>
//selector: mostrar sus pasiones (lo que le gusta) Futbol: Real Madrid que cntenga una foto de acuerdo a lo que seleccione
//boton: comentario que le quieran hacer al profesor y que se muestre en un alert

const adivinanumero = document.getElementById("numero");
const resultadonumero = document.getElementById("resultado");

adivinanumero.addEventListener("input", function () {
    if (adivinanumero.value === "") {
        resultadonumero.textContent = "";
        return;
    }

    const numero = Number(adivinanumero.value);

    if (numero === 17) {
        resultadonumero.textContent = "¡Adivinaste!";
    } else if (numero < 17) {
        resultadonumero.textContent = "Más alto";
    } else {
        resultadonumero.textContent = "Más bajo";
    }
});

// 2. Selector de pasiones
const pasiones = document.getElementById("pasiones");
const imagen = document.getElementById("imagen");
const texto = document.getElementById("texto");

pasiones.addEventListener("change", function () {
    if (pasiones.value === "anime") {
        imagen.src = "https://tse3.mm.bing.net/th/id/OIP.AVTanJaGpeijoUPmEn0t1wHaKj?r=0&pid=Api&h=220&P=0";
        texto.textContent =" Este es mi anime favorito";

    } else if (pasiones.value === "juego") {
        imagen.src = "https://ultimaficha.com.br/wp-content/uploads/2024/03/Resident-Evil-4-Remake.jpg";
        texto.textContent = "Este es mi juego favorito";
    } else if (pasiones.value === "musica") {
        imagen.src = "https://tse4.mm.bing.net/th/id/OIP.i-n8vlH-DY9JoLf7hcW9NwHaHa?r=0&pid=Api&h=220&P=0";
        texto.textContent = "Este es mi cantante favorito";
    } 
    else {
        imagen.src = "";
    }

});


const botonComentario = document.getElementById("boton-comentario");

botonComentario.addEventListener("click", function () {
    alert("¿todo bien?");
});
