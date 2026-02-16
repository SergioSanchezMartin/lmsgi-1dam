// OBJETOS (clave -> valor)
const carta = {
    cafe: { precio: 1.2, emoji: "☕", texto: "Café", alergenos: [] },
    te: { precio: 1.1, emoji: "🍵", texto: "Té chai", alergenos: [] },
    pitufo: { precio: 1.8, emoji: "🥪", texto: "Pitufo mixto", alergenos: ["gluten"] },
    donut: { precio: 2, emoji: "🍩", texto: "Donut", alergenos: ["gluten", "huevo"] }
};

// ELEMENTOS HTML DEL DOM
const selectProducto = document.getElementById("selectProducto");
const tablaMenu = document.getElementById("tablaMenu");
const infoProducto = document.getElementById("infoProducto");

// Como acceder al valor de una clave. Notación preferida -> con corchetes
const producto = "pitufo";
console.log(`Notación con punto -> El precio del ${producto} es ${carta.pitufo.precio}€`);
console.log(`Notación con corchetes -> El precio del ${producto} es ${carta[producto].precio}€`);

// Método para obtener las clave
const claves = Object.keys(carta);      //Array

// Rellenar el select
for (const clave of claves) {
    const opcion = document.createElement("option");
    opcion.value = clave;
    opcion.textContent = `${carta[clave].texto} ${carta[clave].emoji}`;
    selectProducto.appendChild(opcion);
}
