function generarLongitud(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generarTexto(longitud) {
    let texto = "";
    let caracteres = ["Hola", "Adios", "Tacos", "Burros", "Mañana", "Día", "Noche",
                      "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado",
                      "Domingo", "Enero", "Febrero", "Marzo", "Abril", "Mayo",
                      "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
                      "Diciembre", "Desayuno", "Comida", "Cena", "Cruz", "Triángulo",
                      "Cuadrado", "Rectángulo", "Línea", "Círculo", "Punto", "Geometría",
                      "Pentágono", "Hexágono", "Archivo", "Programa", "Sistema", "Operativo",
                      "Programación", "Computadora", "Procesador", "Video", "Madre", "Padre",
                      "Escuela"];
    for (let i = 0; i < longitud; i++) {
        ind_caracter = Math.floor(Math.random() * caracteres.length);
        texto += caracteres[ind_caracter];
        if (i < (longitud - 1)) {
            texto += ' ';
        }
    }
    return texto;
}

for (let i = 0; i < 5; i++) {
    let body = document.querySelector("body");
    const parrafo = document.createElement("p");
    longitud = generarLongitud(50, 100);
    parrafo.textContent = generarTexto(longitud);
    body.append(parrafo);
    console.log("Número de carácteres en el parrafo #" + (i+1) + ": " + parrafo.textContent.length);
}