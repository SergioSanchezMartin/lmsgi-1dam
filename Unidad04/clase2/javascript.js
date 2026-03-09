const btnCargar = document.querySelector("#btnCargar");
const estado = document.querySelector("#estado");
const lista = document.querySelector("#lista");

btnCargar.addEventListener("click", () => {
    // 1) Estado inicial: informamos al usuario
    estado.textContent = "Cargando...";
    estado.className = "";
    lista.innerHTML = "";

    // 2) Lanzamos la petición: fetch devuelve Promise<Response>
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            //1er then: manejo de la respuesta HTTP (status, ok, etc.)
            console.log("Respuesta:", response);

            // 3) Comprobamos si la respuesta HTTP es correcta
            if(!response.ok) {
                //Forzamos un error para que salte al catch
                throw new Error("Respuesta no OK. Código HTTP: " + response.status);
            }
            // 4) Convertimos el body de la respuesta a JSON: devuelve una Promise<Array>
            return response.json();
        })
        .then(data => {
            // 5) 2º then: cuando la última promesa se cumple, ya tenemos los datos parseados (JSON real)
            // Es un array de objetos
            console.log("Data: ", data);
            estado.textContent = `Recibidos ${data.length} usuarios`;

            // 6) Pintamos en el DOM los usuarios recibidos
            for (const u of data) {
                const tarjeta = document.createElement("div");
                tarjeta.className = "card";
                tarjeta.innerHTML = `
                    <strong>${u.name}</strong><br>
                    <span>${u.email}</span><br>
                    <small>${u.phone}</small>
                    `;
                lista.appendChild(tarjeta);
            }

        })
        .catch(err => {
            // 7) Si hay error de red o un throw anterior, entramos aquí
            estado.textContent = "Error cargando usuarios";
            estado.className = "error";
            console.log(err);
        });
});

