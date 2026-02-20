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

// Rellenar el select con for clásico
// for (i=0; i<claves.length; i++) {
//   // 1) Creo el elemento <option>
//   const opcion = document.createElement("option");
//   // 2) Asignamos atributo value a la opcion
//   opcion.value = claves[i];
//   // 3) Añado contenido al <option> -> texto + emoji
//   opcion.textContent = `${carta[claves[i]].texto} ${carta[claves[i]].emoji}`;
//   // 4) Insertamos el elemento dentro del select
//   selectProducto.appendChild(opcion);
// }

// Rellenar el select con for-of
for (const item of claves) {
  // 1) Creo el elemento <option>
  const opcion = document.createElement("option");
  // 2) Asignamos atributo value a la opcion
  opcion.value = item;
  // 3) Añado contenido al <option> -> texto + emoji
  opcion.textContent = `${carta[item].texto} ${carta[item].emoji}`;
  // 4) Insertamos el elemento dentro del select
  selectProducto.appendChild(opcion);
}

// Rellenar la tabla (for clásico a petición de Alba)
for (let i = 0; i < claves.length; i++) {
  // Almaceno el valor de cada clave de la carta
  const producto = carta[claves[i]];
  // Creo elemento tr
  const tr = document.createElement("tr");
  tr.dataset.clave = claves[i];
  tr.innerHTML = `
    <td>${claves[i]}</td>
    <td>${carta[claves[i]].emoji}</td>
    <td>${carta[claves[i]].texto}</td>
    <td>${carta[claves[i]].precio.toFixed(2)}</td>
    <td>${carta[claves[i]].alergenos.length === 0 ? "N/A" : carta[claves[i]].alergenos.join(", ")}</td>
  `;
  // Insertamos el elemento tr
  tablaMenu.appendChild(tr);
}

function mostrarProducto(clave) {
  // Accedemos al "valor" con la clave: menu[clave]
  const item = carta[clave];

  infoProducto.innerHTML =
    `<b>Acceso:</b> carta["${clave}"] → ${item.emoji} ${item.texto}, ${item.precio.toFixed(2)}€`;

  // Resaltar fila
  for (const tr of tablaMenu.querySelectorAll("tr")) {
    tr.classList.toggle("fila-seleccionada", tr.dataset.clave === clave);
  }
}
selectProducto.addEventListener("change", (e) => mostrarProducto(e.target.value));