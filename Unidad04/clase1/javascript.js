// Si quiero parsear desde un recurso externo:
fetch("./usuarios.json")
  .then(response => {
    if (!response.ok) throw new Error("No se pudo cargar el JSON");
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => console.error(err));
// Esto es un string en formato JSON
const texto = `{
    "nombre": "Ana",
    "edad": 30
}`;

//JSON -> objeto JS: parsear
const persona = JSON.parse(texto);
console.log(persona.nombre);
console.log(persona.edad);

// Objeto JS -> JSON
const alumno = {
    nombre: "Antonio",
    edad: 20,
    repetidor: false
}

const textoJSON = JSON.stringify(alumno);
console.log(textoJSON);

