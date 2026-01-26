"use strict";
const app = document.querySelector("#app");
const nombre = "1º DAM, incultos";

app.textContent = `Hola ${nombre}`;

app.innerHTML = `<div>
    Hola <strong>
        ${nombre}.
    </strong>
</div>`;

// Métodos modernos getters y setters
console.log(app.getHTML());
const cod = `<strong>Despierta Ismael.</strong>`;
app.setHTMLUnsafe(cod);

// Crear elementos HTML
const contenedor = document.createElement("section");
console.log(contenedor.isConnected);    //false -> no está conectado/insertado
contenedor.innerHTML = "<p>Estoy creando una sección a través del método createElement</p>"
//Lo insertamos
document.body.appendChild(contenedor);
console.log(contenedor.isConnected);     //true -> está conectado/insertado

const seccion = contenedor;     //Esto no es una copia, sino una referencia al mismo elemento
//Si queremos copiar o clonar:
const section = contenedor.cloneNode();

// div (.contenedor)
//     strong
//     div
//         strong (.green)
