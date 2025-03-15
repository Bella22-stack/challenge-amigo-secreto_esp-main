let nombres = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    nombres.push(nombre);
    mostrarNombres();
    input.value = "";  // Limpiar campo de texto
}

function mostrarNombres() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debes agregar al menos 2 nombres para sortear.");
        return;
    }

    let sorteados = [...nombres];
    let resultado = {};

    for (let i = 0; i < nombres.length; i++) {
        let opciones = sorteados.filter(n => n !== nombres[i]);
        
        if (opciones.length === 0) {
            return alert("No se pudo completar el sorteo. Intenta nuevamente.");
        }

        let indice = Math.floor(Math.random() * opciones.length);
        resultado[nombres[i]] = opciones[indice];
        sorteados = sorteados.filter(n => n !== opciones[indice]);
    }

    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    let div = document.getElementById("resultado");
    div.innerHTML = "<h2>Resultados del sorteo:</h2>";

    for (let nombre in resultado) {
        div.innerHTML += '<p>${nombre} → ${resultado[nombre]}</p>';

    }
}
