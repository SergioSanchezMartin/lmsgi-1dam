"use strict";
console.log("JS cargado ✅");
const nombre = "Sergio";

// Gestión de eventos
// 1ª forma: atributo HTML (❌ no recomendable)

// function saludar() {
//     const texto = document.querySelector(".salida");
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

// 2º forma: API JS setAttribute - Añadimos el atributo HTML
// const boton = document.getElementById("btn");

// boton.setAttribute("onclick","saludar()");
// function saludar() {
//     const texto = document.querySelector(".salida");
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

// 3ª forma: addEventListener ✅ (la mejor)
// const boton = document.getElementById("btn");
// const texto = document.querySelector(".salida");

// boton.addEventListener("click", () => {
//     texto.textContent = `Salida: Hola ${nombre}`;
// });

// Formas de pasar la función a addEventListener
// A) Función definida aparte y pasar referencia (la “clásica”)
// const boton = document.getElementById("btn");
// const texto = document.querySelector(".salida");

// function saludar() {
//     texto.textContent = `Salida: Hola ${nombre}`;
// }

// boton.addEventListener("click", saludar);

// B) El error típico: poner () (se ejecuta al cargar, no al click)
// boton.addEventListener("click", saludar());  //❌ MAL
// boton.addEventListener("click", saludar);    //✅ BIEN

// C) Función anónima (muy común)
// boton.addEventListener("click", function () {
//     texto.textContent = `Salida: Hola ${nombre}`;
// });

// D) Función flecha (de las más usadas actualmente)
// boton.addEventListener("click", () => {
//     texto.textContent = `Salida: Hola ${nombre}`;
// });

// ¿Y si hace falta pasarle parámetros?
// function suma(num1, num2) {
//     texto.textContent = num1+num2;
// }
// boton.addEventListener("click", () => suma(4,6));

// Variante con función anónima
// boton.addEventListener("click", function () {
//     suma(7,8);
// });

// Mini-reto (nivel medio): contador de clicks + botón reset
// Reglas:
// ❌ No usar onclick en HTML
// ❌ No usar setAttribute('onclick', ...)
// ✅ Usar addEventListener

// En cada click mostrar: "Salida: has hecho X click(s)"
// En reset: poner contador a 0 y mostrar "Salida: contador a 0".
// const btn = document.getElementById("btn");
// const btnReset = document.getElementById("btnReset");
// const salida = document.getElementById("salida");

// let contador = 0;

// btn.addEventListener("click", () => {
//   contador++;
//   salida.textContent = `Salida: has hecho ${contador} click(s)`;
// });

// btnReset.addEventListener("click", () => {
//   contador = 0;
//   salida.textContent = "Salida: contador a 0";
// });


// Mini-reto (avanzado): Combinar evento click + array para mostrar mensajes distintos según el click.
// Cada click muestra el siguiente mensaje de un array. Cuando llegue al final, vuelve al principio (cíclico).
const btn = document.getElementById("btn");
const btnReset = document.getElementById("btnReset");
const salida = document.getElementById("salida");

let i = 0;

const mensajes = [
    "Si llegas aquí, podrías ser de 1DAW.",
    "No vas mal, estás alcanzando cierto nivel. Pareces Arbeloa.",
    "Uff! Esto ya es otra cosa. Flick estaría orgulloso.",
    "Te has subido al gran FUNESBUQUE."
];

btn.addEventListener("click", () => {
    salida.textContent = mensajes[i];
    i++;
    if (i === mensajes.length) i=0;
});

btnReset.addEventListener("click", () => {
    i = 0;
    salida.textContent = "Salida: (aún nada)";
});


