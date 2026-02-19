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

tablaMenu.innerHTML = "";
for (const clave of claves){
    const producto = carta[clave];
    const fila = document.createElement("tr");
    fila.dataset.clave = clave;
    fila.innerHTML = `
        <td>${clave}</td>
        <td>${producto.emoji}</td>
        <td>${producto.texto}</td>
        <td>${producto.precio.toFixed(2)}</td>
        <td>${producto.alergenos.length != 0 ? producto.alergenos.join(", ") : "N/A"}</td>
        `;
    tablaMenu.appendChild(fila);
}
mostrarProducto(selectProducto.value);

function mostrarProducto(clave) {
    // Accedemos al "valor" con la clave: menu[clave]
    const producto = carta[clave];

    infoProducto.innerHTML =
      `<b>Acceso:</b> carta["${clave}"] → ${producto.emoji} ${producto.texto}, ${producto.precio.toFixed(2)}€`;

    // Resaltar fila
    for (const tr of tablaMenu.querySelectorAll("tr")) {
      tr.classList.toggle("fila-seleccionada", tr.dataset.clave === clave);
    }
  }

  selectProducto.addEventListener("change", (e) => mostrarProducto(e.target.value));

